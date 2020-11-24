const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
data.findOne({sunucu : message.guild.id},function(err,doce){
let channel = message.mentions.channels.first()
if(channel) {

data.findOneAndUpdate({sunucu : message.guild.id},{$set : {Kkanal : channel.id}},function(err,docs){
const embed2 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | Kayıtların yapılacağı  \`kanal\`  **${channel.toString()}** Olarak ayarlandı.`).setColor(open.embedTrue)
message.channel.send(embed2)
})
  
} else if(args[0] == "kapat") {
    const embed3 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Önce kapatmak istediğin şeyi ayarlanması lazım!`).setColor(open.embedFalse)

    let fetch = doce.Kkanal
    if(!fetch) return message.channel.send(embed3)
    data.findOneAndUpdate({sunucu : message.guild.id},{$set : {Kkanal : null}},function(err,docs){
    const embed4 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | İstediğin şey **başarıyla** sıfırlandı.`).setColor(open.embedTrue)
message.channel.send(embed4)
    })

  } else {
    const embed1 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt ``Kanalını``  Ayarlamam İçin ``Kayıt`` kanalını **#etiketle**!').setColor(open.embedFalse)
message.channel.send(embed1)
  }
})
}
exports.help = {
    name : "k-kanal",
    aliases : ['kayıt-kanal'],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "k-kanal #kayıt-odası",
    description : "Kayıt Kanalı ayarlama komutu"
}