  const Discord = require('discord.js');

const open = require('../open.json')
  
exports.run = async (client, message, args,p,data) => {

let f = await data.findOne({sunucu : message.guild.id})
const datas = await f.Erol
const datass = await f.Krol
if(!datas) return message.channel.send(new Discord.MessageEmbed().setDescription(`Erkek Rolünü ayarlamamışsın **${p}e-rol @erkek** Şeklinde ayarla `).setColor(open.embedFalse).setFooter('Erkek Rolü ayarlanmamış'))
if(!datass) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kız Rolünü ayarlamamışsın **${p}k-rol @kız** Şeklinde ayarla `).setColor(open.embedFalse).setFooter('Kız Rolü ayarlanmamış'))

function map(map){
  const mapping = {
  " ": "   ",
  "0": "<a:sifir:769855664863969301>",
  "1": "<a:bir:769855664767500309>",
  "2": "<a:iki:769855665686315028>",
  "3": "<a:uc:769855665044455434>",
  "4": "<a:dort:769855664927146004>",
  "5": "<a:bes:769855664163127298>",
  "6": "<a:alti:769855662351974408>",
  "7": "<a:yedi:769855665434787851>",
  "8": "<a:sekiz:769855666293702656>",
  "9": "<a:dokuz:769855664944054294>", 
}
  let rplc =   `${map}`
     .split("")
     .map(c => mapping[c] || c)
     .join("")
  return rplc
  }
  
let toplamüye = message.guild.memberCount.toString()
let aktifüye =message.guild.members.cache.filter(a => a.presence.status !== 'offline').size
let botlar = message.guild.members.cache.filter(a => a.user.bot).size
let sesaktif = message.guild.members.cache.filter(a => a.voice.channel).size
let boost = message.guild.premiumSubscriptionCount.toString()
let kadınüyesayısı = message.guild.members.cache.filter(a => a.roles.cache.has(datass)).size
let erkeknüyesayısı = message.guild.members.cache.filter(a => a.roles.cache.has(datas)).size
 let CS = message.guild.channels.cache.filter(a => a.type == "text").size
 let CSS = message.guild.channels.cache.filter(a => a.type == "category").size
 let CSSS = message.guild.channels.cache.filter(a => a.type == "voice").size
let tag;
if(!f.tag) {
tag = ' Tag Belirtilmemiş';
} else {
tag = message.guild.members.cache.filter(a => a.user.username.includes(f.tag)).size
}

message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.guild.name,message.author.avatarURL({dynamic: true}))
                     .setThumbnail(message.guild.iconURL({dynamic : true, format : "png"}))
.setDescription(`\`\`\`[${p}tag] Taglı Kişi Sayısı için\`\`\``)
.addField(`__Üye Verileri__`,`
<a:gozluklu:769163387393278012>Toplam Üye: **${toplamüye}**
<a:zil:769163384369053696>Aktif Üye: **${aktifüye}**

<:erkek:769607582238900254>Erkek Üye: **${erkeknüyesayısı}**
<:kadin:769607582318067723>Kadın Üye: **${kadınüyesayısı}**

<a:altin2:769202957794672680>Sesteki Üye: **${sesaktif}**
<a:boost:780860001719287841>Boost Sayısı: **${boost}**
<a:kirmizi1:780356137060139018>Bot Sayısı: **${botlar}**
<a:muzik:769855808905150474>Tagdaki Üye: **${tag}**


`).addField('__Kanal Verileri__',`
<:pack:779357197301317662>Yazı Kanalları: **${CS}**
<:afkly:769202661530140742>Kategori Kanalları: **${CSS}**
 <:trash:776811458977464340>Ses Kanalları: **${CSSS}**

`).setColor('#b41515')

)


}
exports.help = {
    name : "say",
    aliases : [],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "say",
    description : "Sunucuyu tarar sayar"
}