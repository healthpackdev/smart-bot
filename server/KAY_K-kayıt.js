const Discord = require('discord.js')
const open = require('../open.json')
const KayıtŞema = require('../database/şema/kayıt.js')

exports.run = async(client, message, args,p,data) => {
let docs = await data.findOne({sunucu : message.guild.id})
let kız = docs.Krol
let yetkili = docs.Yrol
let kayıtsız = docs.Karol
let kayıtkanal = docs.Kkanal
let ekstra = docs.Ekrol
let aktiflik = docs.aktiflik
let düzen = docs.Idüzen
let zorunlu = docs.Izorun

const embed1 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt Sistemi tamamen ayarlanmamış! nelerin ayarlanmadığına bakmak için:\n ``'+p+'kontrol kayıt``').setColor(open.embedFalse)
if(!kız || !yetkili || !kayıtsız || !kayıtkanal) return message.channel.send(embed1)

let teyit1 = message.guild.roles.cache.get(kız)
let teyit2 = message.guild.roles.cache.get(yetkili)
let teyit3 = message.guild.channels.cache.get(kayıtkanal)
let teyit4 = message.guild.roles.cache.get(kayıtsız)
let teyit5 = message.guild.roles.cache.get(ekstra)

let resim = "https://cdn.discordapp.com/emojis/769202829578731540.gif?v=1"
if(!teyit1) return message.channel.send('Ayarlanan Kız rolü Sunucuda yok').then(a => a.delete({timeout : "5000"}))
if(!teyit2) return message.channel.send('Ayarlanan Yetkili rolü Sunucuda yok').then(a => a.delete({timeout : "5000"}))
if(!teyit3) return message.channel.send('Ayarlanan Kayıt kanalı  Sunucuda yok').then(a => a.delete({timeout : "5000"}))
if(!teyit4) return message.channel.send('Ayarlanan kayıtsız rolü Sunucuda yok').then(a => a.delete({timeout : "5000"}))
if(!teyit5 && ekstra) return message.channel.send('Ayarlanan Esktra rol Sunucuda yok').then(a => a.delete({timeout : "5000"}))
  
  if(teyit1 && teyit1.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`**${teyit1}, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü Bu Rolün Üstüne Çekiniz**`,message.channel)
  if(teyit4 && teyit4.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`**${teyit4}, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü Bu Rolün Üstüne Çekiniz**`,message.channel)
  if(teyit5 && teyit5.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`**${teyit5}, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü Bu Rolün Üstüne Çekiniz**`,message.channel)
  
const embed2 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Yanlış Kanaldasın burası Kayıt kanalı değil <#${kayıtkanal}> İşte Burası Kayıt kanalı`).setColor(open.embedFalse)
const embed3 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Birini Kayıt edebilmek için bu sunucudaki <@&${yetkili}> Rolüne Sahip Olmalısın`).setColor(open.embedFalse)
const embed4 = new Discord.MessageEmbed().setAuthor('Hata...','https://cdn.discordapp.com/emojis/769202870612131840.gif?v=1').setDescription(`Bir Kullanıcı **@Etiketlemelisin** veya **ID** Girmelisin.`).addField('Örnek:',`\`\`\`
${p}k <@etiket/ID> <isim-yaş>
${p}k <@etiket/ID>
\`\`\``).setColor('#e100ff')
const embed6 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | kayıt edilcek kişi <@&${kayıtsız}> Rolüne sahip olmalı`).setColor(open.embedFalse)

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(embed3)
 if(message.channel.id !== kayıtkanal) return message.channel.send(embed2)
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member)return message.channel.send(embed4)
if(!member.roles.cache.has(kayıtsız)) return message.channel.send(embed6)
let isim = args[1]
let yaş = args[2]
const embed5 = new Discord.MessageEmbed().setAuthor('[ Kayıt Başarılı ]',resim).setDescription(`
**<:kadin:769607582318067723> - <@${member.id}> Kaydı ${message.author.toString()} Tarafından Yapıldı!**
\`\`\`diff
+ ${isim  ? isim : member.user.username} - Sunucuya Hoşgeldin 🤗
\`\`\`
**${member}, Kullanıcıya <@&${kız}> Rolü Verildi.**
`).setThumbnail(member.user.avatarURL({format : "png", dynamic : true})).setColor('#af00f5')
const embed7 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | **İsim Zorunluluğu Ayarlanmış İsim Yaş girmelisin**.\n\n \`!k @etiket İsim Yaş\` `).setColor(open.embedFalse)
if(!isim && !yaş && zorunlu) return message.channel.send(embed7)
  if(isim && isim.length > 20) return client.sendFalse(`Çok Büyük İsim  Giriyorsun Kısaltmayı Dene.`,message.channel)
  if(yaş && yaş.length > 4)return client.sendFalse(`Çok Büyük  Yaş Giriyorsun Kısaltmayı Dene.`,message.channel)
if(member) {
  
if(isim) {
  
  if(düzen){
    if(düzen.includes("{yas}") && !yaş) yaş = "0";
    const replce = düzen.replace(`{isim}`,`${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()}`).replace(`{yas}`,`${yaş}`)
    member.setNickname(replce)
  } else {
    if(!yaş) yaş = "0"
member.setNickname(`${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()} ${yaş}`)
  }
}

  
 if(aktiflik) {
   
let kayıtSchema = new KayıtŞema({
  Guild : message.guild.id,
  MM : member.id,
  User : `**${member.user.tag}**(\`${member.id}\`)`,
  Owner : message.author.id,
  Gender : "<:kadin:769607582318067723>",
  Name :`${isim} | ${yaş}`
})
await kayıtSchema.save()  
   
}

    var roles = []
  if(teyit1) roles.push(teyit1.id)
  if(teyit5) roles.push(teyit5.id)
  
  member.roles.set(roles)
  message.channel.send(embed5)


}
  
}
exports.help = {
    name : "k-kayıt",
    aliases : ['k','kız','kadın'],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "k @etiket / s!k @etiket İsim Yaş",
    description : "Kayıt Sİstemi Kız Kayıt komutu"
}
