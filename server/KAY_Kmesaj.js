const Discord = require('discord.js')
const open = require('../open.json')
const moment = require('moment')
require('moment-duration-format')
const hex = require('hex-color-regex')
exports.run = async(client, message, args, p,db) => {
 const created = new Date().getTime() - message.author.createdAt.getTime();
 const userCe = moment.duration(created).format("Y [yıl], D [gün], H [saat]")
let ne = args[0]
let ne2 = args.slice(1).join(" ")

if(ne == "kapat") {
  let veri = await db.findOne({sunucu : message.guild.id})
  if(!veri.mesaj.msj) return message.channel.send(new Discord.MessageEmbed().setColor(open.embedFalse).setDescription(`<a:olmaz:769202870612131840> | Kayıt Mesajı Zaten Ayarlanmamış.`))
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"mesaj.msj" : null}})
  message.channel.send(new Discord.MessageEmbed().setColor(open.embedTrue).setDescription(`<a:olur:769202869151989761> | Kayıt Mesajı Başarıyla Normale döndü.`))
}else if(ne == "ayarla") {
  if(!ne2) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Ayarlamam için Değişkenler ile bir mesaj girmelisin: **${p}k-mesaj ayarla <mesaj>**`).setColor(open.embedFalse))
  if(ne2.length > 1000 || ne2.length < 10) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Min. **10 Karakter** Max. **500 Karakter** Girmelisin.`).setColor(open.embedFalse))
  
  message.channel.send(new Discord.MessageEmbed().setColor('#4c0ff3').setDescription(`Onay veriyor musun? **evet** veya **hayır**`).addField('Mesaj',ne2))
  let collecter = await message.channel.awaitMessages(m=>m.author.id == message.author.id,{max : 1,time : 30000,errors : ['time']})
  let cv = collecter.first().content.toLowerCase()
  if(cv == "evet") {

    await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"mesaj.msj":ne2}})
    return message.channel.send(new Discord.MessageEmbed().setDescription(`**Kayıt Mesajı Başarıyla Ayarlandı. ${p}k-mesaj test**`).addField('Mesaj',ne2).setColor(open.embedTrue))
  } else if(cv == "hayır") {
    message.reply('İşlem iptal edildi')
  } else {
    message.reply('Evet veya hayır Demeliydin İşlem İptal oldu.')
  }
} else if(ne == "renk") {
    let c = await db.findOne({sunucu : message.guild.id})
    if(c.embed == false) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Kayıt Mesajını Embed Yapınız :**${p}embed evet**`).setColor(open.embedFalse))
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Bir Renk Kodu Gir örnek **#3b2b2bs**').setColor(open.embedFalse))
  if(!hex().test(args[1])) return message.channel.send(new Discord.MessageEmbed().setColor(open.embedFalse).setDescription('<a:olmaz:769202870612131840> | Lütfen Geçerli bir Renk Kodu Giriniz.'))
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"mesaj.renk":args[1]}})
  message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | **Başarıyla ${args[1]} Olarak Embedin Rengi Ayarlandı.**`).setColor(args[1]))

}else {
  let c = message.guild.memberCount.toLocaleString()

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
  let rplc =   `${message.guild.memberCount.toString()}`
     .split("")
     .map(c => mapping[c] || c)
     .join("")
    return message.channel.send(new Discord.MessageEmbed().setColor('#4c0ff3').setTitle('***\:scroll: Kayıt Mesajı Ayarlama Menüsü***')
.setDescription(`
__Kayıt Kanalına Atılacak Mesajın İçeriği__


<a:mavi1:780047769146228757> **\`Kayıt mesajını Özelleştirmen için Değişkenler:\`**
 
> \`{user:etiket}\` Gelen Kullanıcıyı ${message.author} Şeklinde Etiketler
> \`{user:ad}\` Gelen Kullanıcının \`${message.author.username}\` Şeklinde ismi
> \`{user:hastag}\` Gelen Kullanıcının \`${message.author.discriminator}\` Şeklinde Etiketi
> \`{user:id}\` Gelen Kullanıcının \`${message.author.id}\` Şeklinde ID'si
> \`{user:kuruluş}\` Gelen Kullanıcının \`${moment(message.author.createdAt).format(`YYYY/MM/DD`)}\` Şeklinde Kuruluş Tarihi
> \`{user:kuruluş2}\` Gelen Kullanıcının  \`${userCe}\` Şeklinde K. T.
> \`{user:tehlike}\` Kullanıcıyı \`30 Günden Az\` Bir Kuruluş ise \`Tehlikeli\` yazar
> \`{user:durum}\` Gelen Kullanıcının \`Yemek Yiyorum!\` Şeklinde Özel Durumu

> \`{guild:ad}\` Sunucunun \`${message.guild.name}\` Şeklinde adı
> \`{guild:üye}\` Sunucunun \`${message.guild.memberCount}\` Şeklinde Üye sayısı
> \`{guild:üye2}\` Sunucunun ${rplc} Şeklinde Üye sayısı
> \`{guild:yetkili:<ad/id/etiket>}\` Sunucunun Yetkili Rolü ve özellikleri 
> \`{guild:kayıtsız:<ad/id/etiket>}\` Sunucunun Kayıtsız rolü ve Özellikleri

> \`{random}\` 6 Hoşgeldin Cümlesinden birini atar

**NOT**: **\`Emoji Kullanacaksanız bu sunucuda olmalı\`**
`).addField('Mesajı Ayarlamak İçin',`\`${p}k-mesaj ayarla <mesaj>\``,true).addField('Eskisine Dönmek için',`\`${p}k-mesaj kapat\``,true).addField('** **','** **').addField('Embed Rengi Ayarlama',`\`${p}k-mesaj renk #renk-kod\``,true))
}
}
exports.help = {
    name : "k-msj",
    aliases : ['kayıt-mesaj','k-mesaj'],
    open : [true],
    perm : "ADMINISTRATOR",
    vote : true
   
}
exports.play = {
    usage : "k-mesaj <mesaj>",
    description : "Kayıt Mesajını Ayarlarsınız."
}
