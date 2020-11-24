const Discord = require('discord.js')
const open = require('../open.json')
exports.run = async(client, message, args,p,data) => {
  const embed1 = new Discord.MessageEmbed().setDescription('<a:olur:769202869151989761> | Kayıtta Biri geldiğinde artık ``<kutulu/embed>`` Mesaj Atılacak!').setColor(open.embedTrue)
   const embed2= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıtta Biri Geldiğinde Zaten ``<kutulu/embed>`` Mesaj Atılıyor!').setColor(open.embedFalse)

let fetch1 =  await data.findOne({sunucu : message.guild.id})
let fetch = fetch1.embed
let ne = args[0]
if(ne == "evet") {
  if(fetch) return message.channel.send(embed2)
   await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {embed : true}})
  message.channel.send(embed1)
} else if(ne == "hayır") {
   if(!fetch) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Kayıtta Biri Geldiğinde Zaten \`<kutulu/embed>\` Mesaj **Atılmıyor**.`).setColor(open.embedFalse))
  
    await data.findOneAndUpdate({sunucu : message.guild.id},{$set : {embed : false}})
    message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | Kayıtta biri geldiğin Artık  \`<Kutulu/embed>\` Mesaj Atılmayacak..`).setColor(open.embedTrue))

}else {
  const embed = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Lütfen Bir Seçenek girin : ${p}embed evet/hayır`).setColor(open.embedFalse)
  message.channel.send(embed)
}



}
exports.help = {
    name : "embed",
    aliases : [],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "embed <evet/hayır>",
    description : "Kayıt Sisteminde mesaj embed mi değil mi "
}