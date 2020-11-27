const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {
let ne = args[0]
if(ne == "ayarla") {
  let kanal = message.mentions.channels.first()||message.guild.channels.cache.get(args[1])
  let num = args[2]
  if(!kanal || kanal.type !== "text") return client.sendFalse(`Sayaçı Ayarlamak İçin Bir Kanal Etiketlemelisin`,message.channel)
  if(isNaN(num)||!num) return client.sendFalse(`Sayaçı Ayarlamak İçin Hedef Üye Sayısını Girmelisin`,message.channel)
  if(message.guild.memberCount >= num) return client.sendFalse(`Belirlediğiniz **Hedef** Şuanki Üye Sayısına Eşit Veya Düşük`,message.channel)
  if(num > 10000)return client.sendFalse(`Bu **Hedef** Senin İçin İmkansız Gibi Görünüyor `,message.channel) 
  await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.kanal":kanal.id,"sayac.hedef":num}})
  client.sendTrue(`Sayaç Kanalı **${kanal}** Sayaç Hedefi **${num}** Olarak Ayarlandı!`,message.channel)
}else if(ne == "hg") {
  let mesaj = args.slice(1).join(" ")
  if(!mesaj)return client.sendFalse(`**HG** Mesajını Girmelisin Değişkenlere Bakmak için: **${p}sayaç**`,message.channel)
  if(mesaj.length > 500 || mesaj.length < 10) return client.sendFalse(`Min. **10** Max. **500** Karakter Girmelisin`,message.channel)
  
 await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.hg":mesaj}})
  client.sendTrue(`Sayaç **HG** mesajı başarıyla Ayarlandı!\n\n${mesaj}`,message.channel)
} else if(ne == "bb") {
   let mesaj = args.slice(1).join(" ")
  if(!mesaj)return client.sendFalse(`**BB** Mesajını Girmelisin Değişkenlere Bakmak için: **${p}sayaç**`,message.channel)
  if(mesaj.length > 500 || mesaj.length < 10) return client.sendFalse(`Min. **10** Max. **500** Karakter Girmelisin`,message.channel)
  
 await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.bb":mesaj}})
  client.sendTrue(`Sayaç **BB** mesajı başarıyla Ayarlandı!\n\n${mesaj}`,message.channel)
} else if(ne == "embed") {
  
     let g = await db.findOne({sunucu : message.guild.id})
    if(g.sayac.embed == true) {
      
    await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.embed":false}})
      return client.sendTrue(`Sayaç Mesajları Artık Embed Olarak **Atılmayacak**`,message.channel)
    
    } else if(g.sayac.embed == false) {
      
      await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.embed":true}})
       return client.sendTrue(`Sayaç Mesajları Artık Embed Olarak **Atılacak**`,message.channel)
    }
    
   
  
}else if(ne == "kapat"){

  let g = await db.findOne({sunucu : message.guild.id})
  if(g.sayac.kanal && g.sayac.hedef) {
    
     await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"sayac.embed":false,"sayac.hedef":null,"sayac.kanal":null,"sayac.hg":null,"sayac.bb":null}})
    client.sendTrue(`**Başarıyla Sayaç Verileri Silindi**`,message.channel)
  } else {
   return client.sendFalse(`Sayaç Zaten Ayarlanmamış`,message.channel)
  }
  
}else {
  const sayaç = new Discord.MessageEmbed().setTitle('Smart Sayaç Sistemi',client.user.avatarURL({dynamic : true})).setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
  .addField(`<a:altin1mor:769202953654632472>__${p}sayaç ayarla #kanal <hedef>__》`,`Sayaç Sisteminin Çalışması İçin Sayaç Kanalı Ve Hedefini Ayarlayın`)
  .addField(`<a:altin1mor:769202953654632472>__${p}sayaç embed__》`,`Sayaç Mesajı Yanı Renkli Olan Kutulu mu Mesaj mı olsun(\`Normali : "Hayır"\`)`)
  .addField(`<a:altin1mor:769202953654632472>__${p}sayaç hg <Mesaj>__》`,`Sayaç **HG** Mesajını Özelleştirebilirsiniz **Değişkenler Altta**`) 
  .addField(`<a:altin1mor:769202953654632472>__${p}sayaç bb <Mesaj>__》`,`Sayaç **BB** Mesajını Özelleştirebilirsiniz **Değişkenler Altta**`)
  .addField(`<a:altin1mor:769202953654632472>__${p}sayaç kapat__》`,`Sistemi Kapatır Yeniden Ayarlayabilirsiniz`)
  .addField(`<a:altin1mor:769202953654632472>__Sayaç Mesajı Değişkenler__`,`
> \`{user:etiket}\` Gelen Kullanıcıyı ${message.author} Şeklinde Etiketler **(Sadece HG Mesajında Geçerli)**

> \`{user:ad}\` Gelen Kullanıcının \`${message.author.username}\` Şeklinde ismi
> \`{user:tag}\` Gelen Kullanıcının \`${message.author.tag}\` Şeklinde Tam İsmi

> \`{guild:ad}\` Sunucunun \`${message.guild.name}\` Şeklinde adı
> \`{guild:üye}\` Sunucunun \`${message.guild.memberCount}\` Şeklinde Üye sayısı
> \`{guild:hedef}\` Sunucunun \`829\` Şeklinde hedef Üye Sayısı
> \`{guild:kalan}\` Sunucunun \`281\` Şeklinde hedefe Kalan Üye Sayısı
  `).addField(`__Ayarlamak için__`,`**\`${p}sayaç hg <mesaj>\`** - **\`${p}sayaç bb <mesaj>\`**`)
  .setFooter('Sayaç Sistemi').setColor('#ef00ff')
  return message.channel.send(sayaç)
}
 
}
exports.help = {
    name : "sayaç",
    aliases : ['sayaç-sistem'],
    open : [true],
    perm : "ADMINISTRATOR"
   
}
exports.play = {
    usage : "sayaç <sınıf> <ayar>",
    description : "Sayaç Sistemini Ayarlama"
}
