const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {

let ne = args[0]
let vr = await db.findOne({sunucu : message.guild.id})
let arr = []
const eksiks = new Discord.MessageEmbed().setColor('#e4eb27').setTitle(`Sunucudaki Kayıt Eksikleri`).setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
.setDescription(`**Zorunlu Olanların Başı <:dndly:769202661391466527> Tavsiye Olanların Başı <:afkly:769202661530140742> ile Başlıyor** `)
if(ne == "kayıt") {
  if(!vr.Erol){
    eksiks.addField(`<:dndly:769202661391466527>__${p}e-rol__`,`\`${p}e\` **Erkek** Kayıt Komutu **Erkek** Rolü Ayarlanmassa **Çalışmaz**`)
  }
  if(!vr.Krol || !message.guild.roles.cache.get(vr.Krol)) {
    eksiks.addField(`<:dndly:769202661391466527>__${p}k-rol__`,`\`${p}k\` **Kız** Kayıt Komutu **Kız** Rolü Ayarlanmassa **Çalışmaz**`)
  }
  if(!vr.Yrol||!message.guild.roles.cache.get(vr.Yrol)) {
    eksiks.addField(`<:dndly:769202661391466527>__${p}y-rol__`,`\`${p}e & ${p}k\` **Yetkili** Rolü Ayarlanmazsa Kayıt Asla **Çalışamaz**`)
  }
  if(!vr.Kkanal||!message.guild.channels.cache.get(vr.Kkanal)) {
    eksiks.addField(`<:dndly:769202661391466527>__${p}k-kanal__`,`\`${p}e & ${p}k\` **Kayıt Kanalı**  Ayarlanmazsa Kayıt Asla **Çalışamaz**`)
  }
  if(!vr.otoroll.user) {
    eksiks.addField(`<:afkly:769202661530140742>__${p}otorol user @role__`,`Otorol Ayarlanmazsa  Gelen Kişilere Otorol **Verilmez**`)
  }
  if(!vr.Karol||!message.guild.roles.cache.get(vr.Karol)){
    eksiks.addField(`<:dndly:769202661391466527>__${p}ka-rol__`,`\`${p}e & ${p}k\` **Kayıtsız Rolü** Ayarlanmazsa Kayıt Asla **Çalışamaz**`)
  }
  if(!vr.aktiflik) {
      eksiks.addField(`<:afkly:769202661530140742>__${p}aktiflik aç__`,`Aktiflik Açarak Kayıt Sayılarını **Denetleyebilirsiniz**`)
  }
  if(!vr.Ekrol||!message.guild.roles.cache.get(vr.Ekrol)) {
     eksiks.addField(`<:afkly:769202661530140742>__${p}ek-rol__`,`Ekstra verilecek Rolü Girerek @üye Rolü Gibi Rollerinizi **verebilirsiniz**`)
  }
  if(vr.Erol && message.guild.roles.cache.get(vr.Erol).position >= message.guild.member(client.user).roles.highest.position) {
    eksiks.addField(`<:dndly:769202661391466527>UYARI`,`<@&${vr.Erol}>, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü bu rolün Üstüne Çekiniz`)
  }
    if(vr.Krol && message.guild.roles.cache.get(vr.Krol).position >= message.guild.member(client.user).roles.highest.position) {
    eksiks.addField(`<:dndly:769202661391466527>UYARI`,`<@&${vr.Krol}>, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü bu rolün Üstüne Çekiniz`)
  }
    if(vr.Karol && message.guild.roles.cache.get(vr.Karol).position >= message.guild.member(client.user).roles.highest.position) {
    eksiks.addField(`<:dndly:769202661391466527>UYARI`,`<@&${vr.Karol}>, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü bu rolün Üstüne Çekiniz`)
  }
  if(!vr.Idüzen) {
    eksiks.addField(`<:afkly:769202661530140742>__${p}isim-düzen__`,`Kayıt Edilince Değişecek İsmin Şeklini **Ayarlayabilirsiniz**`)
  }
  message.channel.send(eksiks.setFooter('Sadece İşleyişi Etkileyenler Vardır'))
} else {
  return client.sendFalse(`Lütfen Sadece **${p}kontrol kayıt** yazınız.`,message.channel)
}
}
exports.help = {
    name : "kontrol",
    aliases : ['eksikler'],
    open : [true],
    perm : "no"
   
}
exports.play = {
    usage : "kontrol <sınıf>",
    description : "Belirlenen Bir Sistemin Eksikleri Olup Olmadığını Söyler"
}
