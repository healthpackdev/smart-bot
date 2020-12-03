const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {

let ne = args[0]
if(ne == "user"||ne == "kullanıcı") {
  let role = message.mentions.roles.first()||message.guild.roles.cache.get(args[1])
  if(!role)return client.sendFalse(`Otorol **Kullanıcı** Rolünü Ayarlamak İçin Bir rol **@etiketlemelisin**`,message.channel)
  if(role.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`${role}, Bu Rol Benim En Üst Rolümden Üstte Bir rol`,message.channel)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {"otoroll.user":role.id}})
  client.sendTrue(`Otorol **Kullanıcı** Rolü ${role} Olarak başarıyla Ayarlandı`,message.channel)
}else if(ne == "bot") {
    let role = message.mentions.roles.first()||message.guild.roles.cache.get(args[1])
  if(!role)return client.sendFalse(`Otorol **Bot** Rolünü Ayarlamak İçin Bir rol **@etiketlemelisin**`,message.channel)
  if(role.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`${role}, Bu Rol Benim En Üst Rolümden Üstte Bir rol`,message.channel)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {"otoroll.bot":role.id}})
  client.sendTrue(`Otorol **Bot** Rolü ${role} Olarak başarıyla Ayarlandı`,message.channel)
} else if(ne == "kapat"){
  let d = await data.findOne({sunucu : message.guild.id})
  if(!d.otoroll.bot && !d.otoroll.user)return client.sendFalse(`Otorol Zaten Ayarlanmamış`,message.channel)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {"otoroll.bot":null,"otoroll.user":null}})
  client.sendTrue(`Otorol Sistemi başarıyla Kapatıldı`,message.channel)
}else {
  const otorol = new Discord.MessageEmbed().setTitle('Otorol Sistem').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
  .addField(`<a:load:769855808879984660>__${p}otorol user @rol__`,`Otorol Gelen **Bot Olmayan** Kişilere Verilecek Rol`)
  .addField(`<a:load:769855808879984660>__${p}otorol bot @rol__`,'Otorol Gelen **Bot Olan** Kişilere Verilecek Rol')
  .addField(`<a:load:769855808879984660>__${p}otorol kapat__`,`Sistemi Kapatır.`)
  .setFooter('Otorol Sistemi',message.author.avatarURL({dynamic : true})).setColor('#d6e4e4')
  message.channel.send(otorol)
}



}
exports.help = {
    name : "otorol",
    aliases : ['oto-rol'],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "otorol <user/bot> <role>",
    description : "Kayıt Sırasında Otomatik Kayıtsız rolü verilecek mi?"
}
