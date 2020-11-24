const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
  let fetch1 = await data.findOne({sunucu : message.guild.id})
  let yetkili = fetch1.Yrol
  const embed2= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | İlk Önce Kayıt yetkilisini ayarla ').setColor(open.embedFalse)
  const embed3= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt ederken zaten İsimsiz kayıt ediyorum').setColor(open.embedFalse)
  const embed4= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Ederken Zaten İsimli Kayıt ediyorum ').setColor(open.embedFalse)


let ne = args[0]
 let fetch = fetch1.Izorun
if(ne == "evet") {
 
  if(!yetkili) return message.channel.send(embed2)
  if(fetch) return message.channel.send(embed4)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : { Izorun : true}})
  message.channel.send(new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Kayıtta artık Zorunlu Olarak isimli kayıt yapılacak'))
} else if(ne == "hayır") {
  if(!yetkili) return message.channel.send(embed2)
   if(!fetch) return message.channel.send(embed3)
  
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : { Izorun : false}})
  message.channel.send(new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Artık Kayıtta isim yaş yazmadan Kayıt Serbest.').setColor(open.embedTrue))
} else {
  const embed = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Lütfen Bir Seçenek girin : ${p}isim-zorunlu evet/hayır`).setColor(open.embedFalse)
  message.channel.send(embed)
}



}
exports.help = {
    name : "isim-zorunlu",
    aliases : ['isim-zorun'],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "isim-zorunlu <evet/hayır>",
    description : "Kayıt Sırasında İsimli mi isimsiz mi kayıt yapılacak?"
}