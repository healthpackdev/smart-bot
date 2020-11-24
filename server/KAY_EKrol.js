const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {
data.findOne({sunucu : message.guild.id},function(err,docs){
let role = message.mentions.roles.first()|| message.guild.roles.cache.get(args[0])
const embed1 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Kayıt ``Ekstra`` Rolünü Ayarlamam İçin ``@üye`` rolünü **@etiketle**!').setColor(open.embedFalse)
if(role) {

data.findOneAndUpdate({sunucu : message.guild.id},{$set : {Ekrol : role.id}},function(err,docs){
const embed2 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | Kayıt \`Ekstra\` rolü **${role.toString()}** Olarak ayarlandı.`).setColor(open.embedTrue)
message.channel.send(embed2)
})
  
} else  if(args[0] == "kapat") {
    const embed3 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | Önce kapatmak istediğin şeyi ayarlanması lazım!`).setColor(open.embedFalse)

    let fetch = docs.Ekrol
    if(!fetch) return message.channel.send(embed3)
    data.findOneAndUpdate({sunucu : message.guild.id},{$set : {Ekrol : null}},function(err,docs){
    const embed4 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | İstediğin şey **başarıyla** sıfırlandı.`).setColor(open.embedTrue)
message.channel.send(embed4)
  })
  } else {
  return message.channel.send(embed1)
  }
})
}
exports.help = {
    name : "ek-rol",
    aliases : ['üye-rol','ekstra-role','ek-role'],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "ek-rol @üye",
    description : "Kayıt Ekstra verilcek Rol Ayarlama Komutu"
}