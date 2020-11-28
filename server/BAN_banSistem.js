const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {
let ne = args[0]

if(ne == "yetkili"||ne == "rol") {
  let role = message.mentions.roles.first()||message.guild.roles.cache.get(args[1])||message.guild.roles.cache.find(a => a.name = args[1])
  if(!role) return client.sendFalse(`Ban yetkili Rolünü Ayarlamak için bir \`@Rol\` etiketlemelisin.`,message.channel)
   await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"bansistem.yetkili":role.id}})
   client.sendTrue(`Ban Yetkili Rolü ${role} Olarak Ayarlandı.\n\n **NOT**: Bu Rolü Rolleri Yönet Yetkisi Olan Rollerden Üste Taşımak Daha **Güvenlidir**`,message.channel)
  
} else if(ne == "log"||ne == "kanal") {
  let channel = message.mentions.channels.first()||message.guild.channels.cache.get(args[1])||message.guild.channels.cache.find(a => a.name = args[1] && a.type == "text")
  if(!channel||channel.type !== "text"){
    return client.sendFalse(`Ban Log Kanalını Ayarlamak için istediğin Kanalı Etiketlemelisin.`,message.channel)
  }
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"bansistem.log":channel.id}})
  client.sendTrue(`Ban Atılınca Logların Atılacağı kanal ${channel} Olarak ayarlandı.\n\n**NOT**: Belirlediğiniz Kanalda Ban yetkililerinizin Görmemesini veya Mesajları Silmesini Engellemek Daha **Güvenlidir**`,message.channel)
} else if(ne == "limit") {
  if(!args[1]) {
    return client.sendFalse('Ban Atma Limitini Ayarlamak için Limiti Girmelisin',message.channel)
  }
  if(isNaN(args[1])) {
    return client.sendFalse('Ban Atma Limitini Sadece Sayı Olarak Girmelisin',message.channel)
  }
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"bansistem.limit":args[1]}})
  client.sendTrue(`Ban Atma Limiti Başarıyla **${args[1]}** Olarak Ayarlandı. Ban Yetkilisinin Günde **${new Number(args[1])+1}**. Banını Atması Engellenecek $.\n\n**NOT:** Bu limiti Ban Yetkililerinizle Paylaşmamak Daha **Güvenilidir**`,message.channel)
} else if(ne == "kapat") {
 
  let f = await db.findOne({sunucu : message.guild.id})
  if(!f.bansistem.yetkili && !f.bansistem.log && !f.bansistem.limit) {
   return client.sendFalse('Ban Sisteminde Herhangi bir Ayar yapılmamış.',message.channel)
  }
  
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"bansistem.log" : null, "bansistem.yetkili" : null, "bansistem.limit" : null}})
 return client.sendTrue(`Ban Sistemi Ayarları Başarıyla Sıfırlandı.`,message.channel)
} else {
  const bansiste = new Discord.MessageEmbed().setTitle('Smart Ban Sistemi').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setFooter('Ban Sistemi')
  .addField(`<a:banned:780409577413410857>__${p}ban-sistem yetkili @rol__》`,`Ban yetkili Rolünü Ayarlamalısınız İstemediğiniz Kişiler Ban atamaz`)
  .addField(`<a:banned:780409577413410857>__${p}ban-sistem log #kanal__》`,`Ban Atan Kişileri Neden Atmış Ne zaman Atmış Görebilirsiniz`)
  .addField(`<a:banned:780409577413410857>__${p}ban-sistem limit <sayı>__》`,`Ban Yetkilileri Günde belirlediğiniz Sayı Dışında Atmaya Çalışırsa Rolünü Alır `)
  .addField(`<a:banned:780409577413410857>__${p}ban-sistem kapat__》`,`Sistemi Kapatabilirsiniz`)
  .addField(`<a:banned:780409577413410857>__Kullanımlar__》`,`
<:trash:776811458977464340>\`${p}ban @kullanıcı <sebep>\`: Yetkilileriniz Bu Şekilde **Ban** Atabilir 
<:trash:776811458977464340>\`${p}unban <id> <sebep>\`: Yetkilileriniz Bu Şekilde Ban Açabilir 
<:trash:776811458977464340>\`${p}bansorgu <id>\`: Yetkilileriniz Birilerinin neden Ban yediğine bakabilir
`).setColor('#ff0000')
  return message.channel.send(bansiste)
}

 
}
exports.help = {
    name : "ban-sistem",
    aliases : ['bansistemi','ban-sistemi','bansistem'],
    open : [true],
    perm : "ADMINISTRATOR",
    vote : true
   
}
exports.play = {
    usage : "ban-sistem <ayar> <AyarCvp>",
    description : "Ban Sistemi yardım"
}
