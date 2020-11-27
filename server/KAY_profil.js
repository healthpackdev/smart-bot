const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
let f = await data.findOne({sunucu : message.guild.id})
let yetkili = f.Yrol

let acikmi = f.aktiflik

  const KayıtŞema = require('../database/şema/kayıt.js')
  let l;
  const embed7 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | İlk Önce Aktifliği açman gerek \`${p}aktiflik aç\` Yazarak açabilirsin.`).setColor(open.embedFalse)

  if(!acikmi) return message.channel.send(embed7)
if(!yetkili) return message.reply('Kayıt Yetkili Rolü Ayarlanmamış.')
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
let member = message.guild.member(user)

    let docs = await KayıtŞema.find({event :"Kayıt",Guild : message.guild.id})
    
    let mumber =  docs ? docs.filter(a => a.Owner == member.id && a.Gender == "<:erkek:769607582238900254>").map(a => `${a.Gender} | ${!isNaN(a.User) ? `<@${a.User}>` : `${a.User}`}`).join("\n") : "**Veri Yok**" ||  "**Veri Yok**"
    let mumber2 =  docs ? docs.filter(a => a.Owner == member.id && a.Gender == "<:kadin:769607582318067723>").map(a => `${a.Gender} | ${!isNaN(a.User) ? `<@${a.User}>` : `${a.User}`}`).join("\n") : "**Veri Yok**" ||  "**Veri Yok**"
    if(!mumber) mumber = "**Veri Yok**"
    if(!mumber2) mumber2 = "**Veri Yok**"
    let mumber3 = docs ? docs.filter(a => a.Owner.includes(member.id) && a.Gender == "<:erkek:769607582238900254>").length : "0"
    let mumber4 = docs ? docs.filter(a => a.Owner.includes(member.id) && a.Gender == "<:kadin:769607582318067723>").length : "0" 
 
    
  const embed6 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Bu Komutu Kullanacak kişi **<@&${yetkili}>** Rolüne Sahip olmalı`).setColor(open.embedFalse)
if(!member.roles.cache.has(yetkili)) return message.channel.send(embed6)
const emb = new Discord.MessageEmbed().setColor('YELLOW').setTitle(`${member.nickname ? member.nickname : member.user.username} \`-\` Kayıt bilgileri`)
.setDescription(`
**Bilgileri Silmek için \`${p}sıfırla\` Yazınız Tüm Sunucu Verileriniz Silinir.**

**Sunucudaki \`${docs.length}\` Kayıt İçerisinden Seninkiler ;**

[__**Erkek Kayıtlar** [${mumber3}]__](${open.link}) ;

${mumber}

[__**Kız Kayıtlar** [${mumber4}]__](${open.link}) ;

${mumber2}

`).setThumbnail(member.user.avatarURL({dynamic : true, format :"png"})).setImage('https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2Fmy%20banner.png?v=1603739755993')
const emb2 = new Discord.MessageEmbed().setColor('YELLOW').setTitle(` ${member.nickname ? member.nickname : member.user.username} \`-\` Kayıt bilgileri`)
.setDescription(`
**Sunucudaki \`${docs.filter(a => a.Guild == message.guild.id).length}\` Kayıt İçerisinden Seninkiler ;**

[__**Erkek Kayıtlar**__](${open.link}) ;

<:erkek:769607582238900254> | **${mumber3}** Erkek Kayıt Yapmışsın

[__**Kız Kayıtlar**__](${open.link}) ;

<:kadin:769607582318067723> | **${mumber4}** Kız Kayıt Yapmışsın

`).setFooter('Çok Fazla Kayıt Yaptığın için listeleyemiyorum').setThumbnail(member.user.avatarURL({dynamic : true, format :"png"}))
if(emb.description.length >= 2000) return message.channel.send(emb2)
message.channel.send(emb)

}
exports.help = {
    name : "profil",
    aliases : ['aktiflik-bilgi'],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "profil < /@etiket/id>",
    description : "Kendinizin veya başkasının kayıt bilgilerini gösterir"
}
