const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args) => {
if(message.author.id == "573054368568311808" || message.author.id == "667017730259419139") {
  let one = args[0]
  let args1 = args.slice(1).join(" ")
  const embed = new Discord.MessageEmbed().setTitle(one).setDescription(args1).setColor('BLUE')
  message.delete()
  message.channel.send(embed)
}





}
exports.help = {
    name : "yaz",
    aliases : ['duyuru'],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "yaz <başlık> <yazı>",
    description : "Sahibe özel Duyuru Komutu"
}