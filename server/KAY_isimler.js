const Discord = require('discord.js')
const open = require('../open.json')
const kyt = require('../database/şema/kayıt.js')
exports.run = async(client, message, args, p,db) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let ytk = await db.findOne({sunucu : message.guild.id})
  if(!ytk.aktiflik) return client.sendFalse(`İlk Önce Aktiflik Açılmalı: **${p}aktiflik aç**`,message.channel)
if(!ytk.Yrol) return message.reply(`Bu Sunucuda Kayıt yetkili rolü ayarlanmamış`)
  if(!message.member.roles.cache.has(ytk.Yrol)) return message.channel.send(new Discord.MessageEmbed().setColor(open.embedFalse).setDescription(`<a:olmaz:769202870612131840> | Bu Komutu Kullanmak için <@&${ytk.Yrol}> Rolüne Sahip olmalısın.`))
  if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | isimlerini Göstermek için Bir Kullanıcı(\`Sunucuda Olan\`) Girmelisin.`).setColor(open.embedFalse))
  let bilgiler = await kyt.find({event : "Kayıt",Guild : message.guild.id, MM : member.id})
if(bilgiler.length <= 0) return message.channel.send(new Discord.MessageEmbed().setAuthor(member.user.tag,member.user.avatarURL({dynamic : true})).setDescription(`**Bu Üyenin herhangi Bir Kaydı Bulunmuyor**`).setColor('#000302').setFooter('Kayıt Bulunmuyor'))
const embed = new Discord.MessageEmbed().setTitle(`${member.nickname ? member.nickname : member.user.username} \`-\` Kayıt İsimleri`)
.setDescription(`
<:mahkemeci:773549662988795904> **${member}'ın Toplam \`${bilgiler.length}\` Tane İsimli Kayıtı bulundu!**

${bilgiler.map(function(a,i){
  i++
  return `\`[${i}.]\` **-** \`${a.Name}\` - ${message.guild.members.cache.get(a.Owner) ? `**${message.guild.members.cache.get(a.Owner).user.tag}**` : "Kayıt Eden Sunucuda Değil."}`
}).join("\n") || "**``Sunucuda Hiç Kayıt Olmamış``**"}

**\`${bilgiler.filter(a => a.Gender == "<:erkek:769607582238900254>").length}\` Kere \`Erkek\` Olarak Kayıt Olmuş.**
**\`${bilgiler.filter(a => a.Gender == "<:kadin:769607582318067723>").length}\` Kere \`Kadın\` Olarak Kayıt Olmuş.**
`).setColor('YELLOW')

 message.channel.send(embed)
}
exports.help = {
    name : "isimler",
    aliases : ['isims'],
    open : true,
    perm : "no"
   
}
exports.play = {
    usage : "isimler <kullanıcı>",
    description : "Kullanıcının Geçmiş Kayıt İsimlerini Sıralar."
}
