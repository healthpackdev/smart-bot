const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {

  let kayıtsız = await data.findOne({sunucu : message.guild.id})
  let kytz = kayıtsız.Karol
  let yet = message.guild.roles.cache.get(kytz)
  const embed2= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | İlk Önce Kayıtsız Rolünü ayarla ').setColor(open.embedFalse)
  const embed3= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Sırasında Zaten Kimseye otorol vermiyorum').setColor(open.embedFalse)
  const embed4= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Sırasında Zaten Otorol veriyorum').setColor(open.embedFalse)

let fetch1 = await data.findOne({sunucu : message.guild.id})
let fetch = fetch1.otorol
let ne = args[0]
if(ne == "evet") {
  if(!yet) return message.channel.send(embed2)
  if(fetch) return message.channel.send(embed4)
  await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {otorol : true} })
  message.channel.send(new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Biri Gelince artık ``@'+ yet.name+ '`` Rolü Oto verilecek!').setColor(open.embedTrue))
} else if(ne == "hayır") {
  if(!yet) return message.channel.send(embed2)
   if(!fetch) return message.channel.send(embed3)
  
    await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {otorol : false}})
  message.channel.send(new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Kayıt Kayıtsız rolünü otomatik verme **kapandı**!').setColor(open.embedTrue))
} else {
  const embed = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Lütfen Bir Seçenek girin : ${p}otorol evet/hayır`).setColor(open.embedFalse)
  message.channel.send(embed)
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
    usage : "otorol <evet/hayır>",
    description : "Kayıt Sırasında Otomatik Kayıtsız rolü verilecek mi?"
}