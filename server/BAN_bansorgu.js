const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {
  let lorg = await db.findOne({sunucu : message.guild.id})
if(!lorg.bansistem.yetkili) return client.sendFalse('Ban yetkili Rolü Ayarlanmamış.',message.channel)
  if(!message.member.roles.cache.has(lorg.bansistem.yetkili)) return client.sendFalse('Komutu Kullanabilmek için Ayarlanan Role Sahip Olmalısın',message.channel)
let id = args[0]
if(!id) return client.sendFalse('Sorgulamak İstediğin Kişinin ID Girmelisin',message.channel)
if(isNaN(id)) return client.sendFalse('Sorgulamak İstediğin Kişinin ID Sadece Sayılardan oluşur',message.channel)
  
  message.guild.fetchBans().then(users=>{
    let user = users.find(member => member.user.id == id)
    if(!user) return client.sendFalse(`Banlanan Böyle Bir Kullanıcı Bulunamadı.`,message.channel)
    
    client.sendTrue(`Kullanıcının Banlanma Bilgisi Bulundu!\n\n **${user.user.tag}**:\`${user.reason}\``,message.channel)
    
  }).catch(e => {
    return client.sendFalse(`Bir Hata Oluştu:\n\n\`${e}\``,message.channel)
  })
}
exports.help = {
    name : "bansorgu",
    aliases : ['ban-sorgu'],
    open : [true],
    perm : "no"
   
}
exports.play = {
    usage : "bansorgu <id>",
    description : "Bir Kişinin Neden Ban yediğini Görebilirsiniz."
}