
const Discord = require('discord.js')
async function otoisim(veri,member) {
if(!veri.otoisim)return;
let nick = veri.otoisim.replace("{username}",member.user.username)
await member.setNickname(nick)
}
module.exports.otoisim = otoisim;

async function antiraid(veri,member,guild){
    
    if(!veri.anti.raid) return;
    let raid = veri.anti
    var embed = new Discord.MessageEmbed()
    let somed = raid.white.some(id => id == member.id)
    var guildA = guild.fetchAuditLogs({type:"BOT_ADD"}).then(x => x.entries.first())
    var user = (await guildA).executor
    if(user.id == guild.owner.id||user.id == client.user.id) return;
    
    if(!somed) {
member.kick('Anti Raid Sistemi.')


if(raid.log) {

let channel = guild.channels.cache.get(raid.log)
if(channel){

    channel.send(
embed.setTitle('İzin Verilmedi ❌')
.setDescription(`\`${user.tag}\` Sunucuya \`${member.user.tag}\` Adlı Botu Ekledi.\n\nAntiraid Açık ve bu Botun İzni Olmadığı İçin Botu Kickledim.`)
.setFooter('Anti Raid Sistemi').setThumbnail(member.user.avatarURL({format : "png"})))
.setColor('RED')
}}
    } else {
    
      
        
        if(raid.log) {
        var guildA = guild.fetchAuditLogs({type:"BOT_ADD"}).then(x => x.entries.first())
        var user = (await guildA).executor
        if(user.id == guild.owner.id||user.id == client.user.id) return;
        let channel = guild.channels.cache.get(raid.log)
        if(channel){
        
            channel.send(
        embed.setTitle('İzin Verildi ✅')
        .setDescription(`\`${user.tag}\` Sunucuya \`${member.user.tag}\` Adlı Botu Ekledi.\n\nAntiraid Açık Fakat bu Botun İzni **Olduğu** İçin Botu İçeri Aldım.`)
        .setFooter('Anti Raid Sistemi').setThumbnail(member.user.avatarURL({format : "png"}))
        .setColor('GREEEN'))
        }} 
    }

}
module.exports.antiraid = antiraid;
