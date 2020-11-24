const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {
let lorg = await db.findOne({sunucu : message.guild.id})
if(!lorg.bansistem.yetkili) return client.sendFalse('Ban yetkili Rolü Ayarlanmamış.',message.channel)
  if(!message.member.roles.cache.has(lorg.bansistem.yetkili)) return client.sendFalse('Komutu Kullanabilmek için Ayarlanan Role Sahip Olmalısın',message.channel)
let id = args[0]
let sebep = args.slice(1).join(" ")
if(!id) return client.sendFalse('Banı Açmak istediğin Kişinin **ID** Girmelisin',message.channel)
if(isNaN(id)) return client.sendFalse('**Banını Açmak istediğin Kişinin ID Sadece Sayılardan Oluşur**',message.channel)
  if(!sebep) return client.sendFalse('**Kullanıcının Banını Açma Sebebini Girmelisin**',message.channel)
message.guild.members.unban(id).then(a => {
 message.channel.send(`<a:banned:780409577413410857> - **${a.tag}**, Banı **${sebep}** Sebebiyle Açıldı.`)
  if(lorg.bansistem.log) {
  message.guild.channels.cache.get(lorg.bansistem.log).send(
    new Discord.MessageEmbed()
    .setTitle('Ban Açılma').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
    .setColor('#00ff19')
    .addField(`<:trash:776811458977464340>__Ban Açan:__`,`${message.author}(\`${message.author.id}\`)`)
    .addField('<:trash:776811458977464340>__Banı Açılan__',`**${a.tag}**(\`${a.id}\`)`).setTimestamp()
    .addField('<:trash:776811458977464340>__Sebep__',`**${sebep}**`).setFooter(`${message.author.tag},  ${a.tag} - Kişinin banını açtı`)
    .setThumbnail(message.author.avatarURL({dynamic : true}))
  )
  }
}).catch(a => {
  return client.sendFalse(`Böyle Bir Kullanıcı Bulunamadı **Veya** Yetkim Yetersiz`,message.channel)
})
}
exports.help = {
    name : "unban",
    aliases : ['un-ban'],
    open : [true],
    perm : "no"
   
}
exports.play = {
    usage : "unban <id>",
    description : "Bir Kişinin Banını Açabilirsiniz"
}