const Discord = require('discord.js')
const open = require('../open.json')
const l = require('../database/şema/begendim.js')
const moment = require('moment')
exports.run = async (client, message, args,p,data) => {


    let k = args[0]
if(!k){
 
const yardım = new Discord.MessageEmbed().setAuthor(`Yardım Menüsü`,client.user.avatarURL()).setTitle('Smart Yardım Menüsü').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setDescription(`
**Güncelleme Bota Geçirildi Fakat Haila Komut Eklenecek. Öneriniz varsa Destek Sunucusuna Gelip Bildirebilirsiniz**
`)
.addField(`__<:english:773549662572511253>Bot Komutları__`,`\`${p}yardım bot\``,true)
.addField(`__<a:mavi1:780047769146228757>Kayıt Komutları__`,`\`${p}yardım kayıt\``,true).addField('** **','** **')
.addField(`__<a:mavi3:780047770039222283>Kullanıcı Komutları__`,`\`${p}yardım kullanıcı\``,true)
.addField(`__<a:mavi2:780047771943567400>Moderasyon Komutları__`,`\`${p}yardım moderasyon\``,true).addField('** **','** **')
.addField(`__<a:altin1:769202952187412532>Prefix Değişmek için__`,`\`${p}prefix ayarla <p>\``,true)
.addField(`__<a:morparti:769163390546345994>Eksikleri Görmek__`,`\`${p}kontrol kayıt\``,true)
.addField('__<:mahkemeci:773549662988795904>Linkler__',`
<:starr:773549663118688306>[[**Botu Davet Edin!**](https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot)]
<:starr:773549663118688306>[[**Destek Sunucusu**](${open.link})]
<:starr:773549663118688306>[[**Bota Oyverin!**](https://top.gg/bot/769110620359622676/vote)]
`).setFooter('Smart yardım Menüsü',message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2Fregister-and-manage-customer-devices-with-connected-field-service-social.png?v=1603620021292').setColor('#0017ff')
return message.channel.send(yardım)
} else if(k == "kayıt"){
const kayıt = new Discord.MessageEmbed().setTitle('Smart Kayıt Sistemi').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setColor('#4800ff')
.setDescription(`
**Botun Rolünü üyelerden Üste Çekmek Sistemin Düzgün Çalışmasını Sağlar**
`)
.addField(`<a:mavi1:780047769146228757>__${p}e-rol @erkek__》`,`\`Kayıt Erkek Rolünü Ayarlama\``)
.addField(`<a:mavi1:780047769146228757>__${p}k-rol @kız__》`,`\`Kayıt Kız rolünü Ayarlama\``)
.addField(`<a:mavi1:780047769146228757>__${p}y-rol @kayıtçı__》`,`\`Kayıt Yetkili Rolünü Ayarlama\``)
.addField(`<a:mavi1:780047769146228757>__${p}ka-rol @kayıtsız __》`,`\`Kayıt Kayıtsız Rolünü Ayarlama\``)
.addField(`<a:mavi1:780047769146228757>__${p}ek-rol @üye__》`,`\`Kayıt Ekstra Verilecek Rol Ayarlama\``)
.addField(`<a:mavi1:780047769146228757>__${p}k-kanal #kayıt__》`,`\`Kayıtların yapılacağı ve Kayıt mesajlarının atılacağı kanal\``)
.addField(`<a:mavi1:780047769146228757>__${p}isim-düzeni [Komutu uygula]__》`,`\`Kayıt Edilen Kişinin İsmini Düzenleme\``)
.addField(`<a:mavi1:780047769146228757>__${p}isim-zorun <evet/hayır>__》`,`\`Kayıt Edilirken mecburen İsim yaş ile Etme\``)
.addField(`<a:mavi1:780047769146228757>__${p}aktiflik <aç/kapat>__》`,`\`Kayıtları Sayar ve ${p}profil Komutu İle görebilirsiniz\``)
.addField(`<a:mavi1:780047769146228757>__${p}k-mesaj__》`,`\`Ultra Mega Süper Kayıt mesajı özelleştirme\``)


.setImage('https://media.discordapp.net/attachments/766322179205496863/780023942189547540/Kullanmlar.png')
.setFooter('Kayıt komutları',message.author.avatarURL({dynamic :true,format : "png"}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2Fregister-and-manage-customer-devices-with-connected-field-service-social.png?v=1603620021292');
return message.channel.send(kayıt)
} else if(k == "kullanıcı") {
const kullanıcı = new Discord.MessageEmbed().setTitle('Smart Kullanıcı Komutları').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setColor('#4800ff').setDescription(`
\`${p}komut <komut-adı>\` : **Komut Hakkında Yardım almak için Yazmanız Yeterlidir.**

`)
.addField(`<a:mavi3:780047770039222283>\`${p}kb @etiket\`》`,'Kullanıcı Bilgi Komutu',true)
.setFooter('Kullanıcı Komutları',message.author.avatarURL({dynamic :true,format : "png"}))
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2Fregister-and-manage-customer-devices-with-connected-field-service-social.png?v=1603620021292');
return message.channel.send(kullanıcı)
  
}else if(args[0] == "moderasyon"){
const pre = new Discord.MessageEmbed().setTitle('Smart Moderasyon Komutları').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setDescription(`
**Bu Sistemlerin Düzgün Çalışması için Botun Rolünü yetkililerden Üste Çekmek Doğru Fikirdir**
`)
.addField(`<a:banned:780409577413410857>__${p}ban-sistem__》`,`Gelişmiş Ban Sistemi Ayarları`,true)
.addField(`<a:altin1mor:769202953654632472>__${p}sayaç__》`,`Ayarlamalı Sayaç Sistemi`,true).addField('** **','** **')
.addField(`<a:load:769855808879984660>__${p}otorol__》`,`Botlara Ve Kullanıcılara Verilen Otorol`,true)
.addField(`<:tester:773549663458295818>__${p}resimli-hg-bb__》`,`Resimli Hg Bb Kanalını Ayarlarsınız`,true).addField('** **','** **')
.addField(`<:elmas:779701065997090816>__${p}otoisim__》`,`Otomatik isim Sistemi`,true)
.addField(`<:sagadogru:769202699434459197>__${p}antiraid__》`,`İzin Verilmeyen Botlara Geçiş Yok`,true)
.setFooter('Sunucu Moderasyon İşlemleri',message.author.avatarURL({dynamic: true}) ).setThumbnail(message.author.avatarURL({format : "png",dynamic : true})).setColor('#ff0000')
return message.channel.send(pre)
} else if(args[0] == "bot"){
  
  const bot = new Discord.MessageEmbed().setTitle('Smart Bot Komutları').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot').setFooter('Bot Komutları').setFooter('Bot komutları',message.author.avatarURL({dynamic :true,format : "png"}))  .setThumbnail(message.author.avatarURL({format : "png",dynamic : true})).setColor('BLUE').setDescription(`
\`${p}komut <komut-adı>\` : **Komut Hakkında Yardım almak için.**

`)
  .addField(`<:english:773549662572511253>__${p}davet__》`,`Smartın Linklerini Atar`,true)
  .addField(`<:english:773549662572511253>__${p}prefix ayarla <p>__》`,`Botun Prefixini Değişebilirsiniz`,true).addField('** **','** **')
  .addField(`<:english:773549662572511253>__${p}istatistik__》`,`Botun İstatistiklerini Gösterir`,true)
  .addField(`<:english:773549662572511253>__${p}sıfırla__》`,`Sunucudaki Botun Verilerini Sıfırlar`,true).addField('** **','** **')
  .addField(`<:english:773549662572511253>__${p}komut <komut-adı>__》`,`Botun Komutu Hakkında Bilgi verir`)
  return message.channel.send(bot)
}else {
  return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Geçerli Bir kategori Giriniz: \`${p}yardım\``).setColor(open.embedFalse))
}

  
  
  
  

  
  
  
}
exports.help = {
    name : "yardım",//Komut ADI
    aliases : ['y'],//Komutun alternatif kullanımları
    open : true,//Komut Kullanıma açık mı kapalı mı
    perm : "no",//Komutu kullanacak Perming adını yaz sunucu sahibi ise owner eğer yok ise "no"
    pre : false
   
}
exports.play = {
    usage : "yardım",//Komutun kullanımı
    description : "Tüm Komutları Gösterir"//komutun açıklaması
}
