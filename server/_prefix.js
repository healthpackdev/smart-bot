const Discord = require('discord.js')

const open = require('../open.json')
exports.run = async (client, message, args,p,data) => {


let o = await data.findOne({sunucu : message.guild.id})
  
if(args[0] === "ayarla") {

if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**<:noki:769202569410117653> | Prefixi Girmelisin : \`${p}prefix ayarla <istediğiniz prefix>\` örnek :**`).setImage('https://cdn.glitch.com/b819e63f-ac6a-40a2-8616-c62ef5027fbe%2F0b4b0b25-0cbb-48bd-894d-c9ee0a37d243.image.png?v=1603468414833').setColor(open.embedFalse))
await data.findOneAndUpdate({sunucu : message.guild.id},{ $set : {prefix : args[1]}})
message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:olur:769202869151989761> | Prefix Başarıyla \`${args[1]}\` Olarak Ayarlandı. **${args[1]}yardım**`).setColor(open.embedTrue))
} else if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:olmaz:769202870612131840> | Ayarlanmayan Prefixi Sıfırlayamazsınız. Şuanki Prefix: ${p}`).setColor(open.embedFalse))
    }
await data.findOneAndUpdate({sunucu : message.guild.id},{ $set : {prefix : open.prefix}})    
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:olur:769202869151989761> | Prefix Başarıyla Sıfırlandı. Şuanki Prefix: s!`).setColor(open.embedTrue));
  } else {

const em = new Discord.MessageEmbed()    
.setDescription(`<a:olmaz:769202870612131840> | Prefixi Ayarlamak için \`${p}prefix ayarla <prefix>\` Yazınız! `).setColor(open.embedFalse)
message.channel.send(em)
  }
};

exports.help = {
    name : "prefix",//Komut ADI
    aliases : ['p'],//Komutun alternatif kullanımları
    open : true,//Komut Kullanıma açık mı kapalı mı
    perm : "MANAGE_GUILD",//Komutu kullanacak Perming adını yaz sunucu sahibi ise owner eğer yok ise "no"
    limit : "10",
  vote : true
   
}
exports.play = {
    usage : "prefix <ayarlar/sıfırla> <prefix>",//Komutun kullanımı
    description : "Sunucunuza özel prefixinizi değişin"//komutun açıklaması
}
