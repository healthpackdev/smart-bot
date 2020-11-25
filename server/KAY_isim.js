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
if(!message.member.roles.cache.has(yetkili)) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Kayıt Sorumlusu olan **<@&${yetkili}>** Rolüne Sahip Olmalısın!`).setColor(open.embedFalse))
if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Lütfen Bir **Kullanıcı @etiketleyin veya ID ** Yazınız..').setColor(open.embedFalse))
if(!ism) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Lütfen Yeni **İsimi** Giriniz.').setColor(open.embedFalse))
if(!member.roles.cache.has(erkek) && !member.roles.cache.has(kız)) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Kullanıcının <@&${erkek}> Veya <@&${kız}> Rolüne Sahip olması gerekiyor.`).setColor(open.embedFalse))
  
member.setNickname(ism)
message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | ${member}, Yeni isimi \`${ism}\` olarak Ayarlandı.`).setColor(open.embedTrue))
  
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
