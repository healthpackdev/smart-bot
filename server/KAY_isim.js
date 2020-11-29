const Discord = require('discord.js')
const open = require('../open.json')


exports.run = async(client, message, args,p,data) => {
  let f = await data.findOne({sunucu : message.guild.id})
let yetkili = f.Yrol
let erkek = f.Erol
let kız = f.Krol
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
let member = message.guild.member(user)
let ism = args.slice(1).join(" ")
if(!message.member.roles.cache.has(yetkili) && !message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Kayıt Sorumlusu olan **<@&${yetkili}>** Rolüne Sahip Olmalısın!`).setColor(open.embedFalse))
if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Lütfen Bir **Kullanıcı @etiketleyin veya ID ** Yazınız..').setColor(open.embedFalse))
  if(member.id == message.guild.owner.id || member.roles.highest.position >= message.member.roles.highest.position) return client.sendFalse(`Bu Kişinin İsmini Değişmeye Yetkin Bulunmuyor`,message.channel)
  if(member.roles.highest.position >= message.guild.member(client.user).roles.highest.position) return client.sendFalse(`Bu Kişinin İsmini Değişemiyorum...`,message.channel)
if(!ism) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Lütfen Yeni **İsimi** Giriniz.').setColor(open.embedFalse))
 if(ism.length > 31) return client.sendFalse(`Max. **32** karakter Girebilirsin`,message.channel)
member.setNickname(ism)
message.channel.send(new Discord.MessageEmbed()
           .setAuthor('İsim Değiştirildi',message.author.avatarURL({dynamic : true}))
                  .setDescription(`🔸️\`İsmi Değiştirilen\`: ${member}\n🔸️\`Yeni İsmi\`: **${ism}**`)
                     .setColor('YELLOW')
                     .setThumbnail(member.user.avatarURL({dynamic : true}))
                     .setFooter(`${message.author.username}, ${member.user.username} Kişinin Adını Değiştirdi.`))
  
}
exports.help = {
    name : "isim",
    aliases : ['isim-değiş','nick'],
    open : true,
    perm : "no"
   
}
exports.play = {
    usage : "isim @etiket <yeni-isim>",
    description : "Kayıt Edilen Kullanıcı Adı yanlış işe kayıt sorumlusu değişebilir."
}
