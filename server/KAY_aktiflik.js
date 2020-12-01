const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
let fetch1 = await data.findOne({sunucu : message.guild.id})
let fetch = fetch1.aktiflik
let ne = args[0]

if(ne == "aç") {
   const embed6 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Sayma Yani aktiflik Zaten **Açık**').setColor(open.embedFalse)
  if(fetch) return message.channel.send(embed6)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : { aktiflik : true}})
     const embed7 = new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Kayıt Sayma yani aktiflik başarıyla **açıldı**').setColor(open.embedTrue)

  message.channel.send(embed7)
} else if(ne == "kapat") {
   const embed5 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Sayma Yani aktiflik Zaten **Kapalı**').setColor(open.embedFalse)
   if(!fetch) return message.channel.send(embed5)
  
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : { aktiflik : false}})
  const embed3 = new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Kayıt sayma **kapatıldı.** Fakat Haila Kayıt Verileriniz Duruyor').setColor(open.embedTrue)
  message.channel.send(embed3)
} else {
  const embed = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Lütfen Bir Seçenek girin : ${p}aktiflik <aç/kapat>`).setColor(open.embedFalse)
  message.channel.send(embed)
}



}
exports.help = {
    name : "aktiflik",
    aliases : ['seviye'],
    open : true,
    perm : "MANAGE_GUILD",
    vote : true
   
}
exports.play = {
    usage : "aktiflik <aç/kapat>",
    description : "Kayıt Sistemi Ne kadar kayıt yaptın o işte "
}
