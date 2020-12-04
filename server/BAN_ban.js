const Discord = require("discord.js")
const ms = require("parse-ms");
const { Database } = require("quickmongo");
const db2 = new Database("mongodb+srv://health:6515320a@cluster0.q972g.mongodb.net/SM");
exports.run = async function(client,message,args,p,db){
const timeout = 86400000 
const lm = await db.findOne({sunucu : message.guild.id})

var limit = lm.bansistem.limit
if(!lm.bansistem.yetkili) return client.sendFalse('Ban yetkili Rolü Ayarlanmamış.',message.channel)
if(!message.member.roles.cache.has(lm.bansistem.yetkili)) return client.sendFalse('Komutu Kullanabilmek için Ayarlanan Role Sahip Olmalısın',message.channel)
if(limit) {
  if(message.author.id != message.guild.owner.id && !message.member.hasPermission('ADMINISTRATOR')) {
const daily = await db2.get(`${message.guild.id}.${message.author.id}_date`)
if ( daily !== null && timeout - (Date.now() - daily) > 0) { 
  
  message.member.roles.remove(lm.bansistem.yetkili)
  await db2.delete(`${message.guild.id}.${message.author.id}_date`)
 await db2.delete(`${message.guild.id}.${message.author.id}_bans`)
return client.sendFalse(`**Bugünkü Ban Limitini aştın! \`Ban\` Rolünü Alıyorum Kurucuya Bildirmelisin.** - <a:banned:780409577413410857>`,message.channel)
}
} else {
 await db2.delete(`${message.guild.id}.${message.author.id}_date`)
 
} 
}
  let sebep = args.slice(1).join(" ")
  let member = message.mentions.members.first()||message.guild.members.cache.get(args[0])
  if(!member)return client.sendFalse(`Banlamak İçin Bir Kullanıcı Etiketlemelisin`,message.channel)

   if(member.id == message.author.id) return message.reply('kendinden Ne istiyorsun :(')
  if(member.id == client.user.id) return message.reply(`O işler öyle Olmuyor Kardeş...`)
  if(member.banable) return client.sendFalse(`Bu Kullanıcıyı Banlayamıyorum`,message.channel)
  if(!sebep) return client.sendFalse(`Banlamak için Bir \`Sebep\` Yazmalısın`,message.channel)
 
  if(message.member.roles && member.roles && message.member.roles.highest.position <= member.roles.highest.position) return client.sendFalse(`Bu kullanıcı Aynı Pozisyona veya Senden Daha Üstte bir Role sahip`,message.channel)
if(lm.bansistem.log) {
  const embed = new Discord.MessageEmbed()
    .setTitle('Banlama').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
    .setColor('#ff0000')
    .addField(`<a:banned:780409577413410857>__Banlayan:__`,`${message.author}(\`${message.author.id}\`)`)
    .addField('<a:banned:780409577413410857>__Banlanan__',`**${member.user.tag}**(\`${member.user.id}\`)`).setTimestamp()
    .addField('<a:banned:780409577413410857>__Sebep__',`**${sebep}**`).setFooter(`${message.author.tag},  ${member.user.tag} - Kişini Banladı`)
    .setThumbnail(message.author.avatarURL({dynamic : true}))
  message.guild.channels.cache.get(lm.bansistem.log).send(embed)
 }
  member.send(`**${message.guild.name}** Sunucusundan Banlandınız.`).catch(a => {
  
  })
member.ban({reason: sebep}).then(a => {
  return  message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag} - ${member.user.tag}`,message.author.avatarURL({format : "png",dynamic : true})).setDescription(`<a:banned:780409577413410857> **|** ${message.author} - **${member.user.tag}**\n\n**${sebep}**`).setColor('#ff0000').setThumbnail(member.user.avatarURL({dynamic : true})))
}).catch(a => {
  return message.channel.send(`Bir hata Oluştu...`)
})


if(limit) {
let uyarıs = await db2.get(`${message.guild.id}.${message.author.id}_bans`) || 0;

await db2.add(`${message.guild.id}.${message.author.id}_bans`,1)
if(uyarıs >= limit) {
 await db2.set(`${message.guild.id}.${message.author.id}_date`, Date.now())
 await db2.delete(`${message.guild.id}.${message.author.id}_bans`)
}
}
}
exports.help = {
    name : "ban",
    aliases : ['ban'],
    open : [true],
    perm : "no"
   
}
exports.play = {
    usage : "ban <kullanıcı> <sebep>",
    description : "Ban Atabilirsiniz"
}
