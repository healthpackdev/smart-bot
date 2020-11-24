const Discord = require('discord.js')
const open = require('../open.json')
exports.run = async(client, message, args) => {



const emb = new Discord.MessageEmbed().setAuthor(client.user.username,client.user.avatarURL({dynamic : true, format : "png"}))
.setDescription(`
<a:muzik:769855808905150474> - [[**Botu Davet Edin!**](https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot)] - <a:muzik:769855808905150474>

<a:muzik:769855808905150474> - [[**Destek Sunucusu**](${open.link})] - <a:muzik:769855808905150474>

<a:muzik:769855808905150474> - [[**Bota Oyverin!**](https://top.gg/bot/769110620359622676/vote)] - <a:muzik:769855808905150474>
`)
.setColor(open.embedTrue).setFooter('Smart Linkler',client.user.avatarURL({format : "png"}))
message.channel.send(emb)


}
exports.help = {
    name : "davet",
    aliases : ['bot-link','bot-gel'],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "davet",
    description : "Botun Linklerini gösterir"
}