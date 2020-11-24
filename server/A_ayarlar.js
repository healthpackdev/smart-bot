const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
  
let docs = await data.findOne({sunucu : message.guild.id})

  
const embed1 = new Discord.MessageEmbed()



message.channel.send(embed1)

}
exports.help = {
    name : "ayarlar",
    aliases : ['sistem'],
    open : true,
    perm : "MANAGE_MESSAGES",
    limit : "0"
   
}
exports.play = {
    usage : "ayarlar",
    description : "Sunucu ayarlarınızı gösterir"
}