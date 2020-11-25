const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {

let ch = message.mentions.channels.first()||message.guild.channels.cache.get(args[0])
if(!ch || ch.type !== "text")return client.sendFalse(`Resimli **HG BB** Kanalını Ayarlamak İçin Etiketlemelisin`,message.channel)
  
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {resimli : ch.id}})
  client.sendTrue(`Resimli Hg BB kanalı ${ch} Olarak Ayarlandı`,message.channel)
}
exports.help = {
    name : "resimli-hg-bb",
    aliases : ['resimlihgbb','resimli-hg'],
    open : [true],
    perm : "no"
   
}
exports.play = {
    usage : "resimli-hg-bb #kanal",
    description : "Resimli Hg Bb kanalları ayarlarsınız"
}
