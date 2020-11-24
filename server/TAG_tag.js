const Discord = require("discord.js");

const open = require('../open.json')
exports.run = async(client, message, args,p,data) => {
  data.findOne({sunucu : message.guild.id},function(err,docs){
  if(args[0] == "ayarla") {
let tag = args[1]
const embed1 = new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Sunucu Tagını Ayarlamam İçin **Tagı** Yazmalısın!').setColor(open.embedFalse)
if(!tag) return message.channel.send(embed1)

 data.findOneAndUpdate({sunucu : message.guild.id},{$set : { tag : tag}},function(err,docs){

  const embed2 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | Sunucu Tagını Başarıyla **\`${tag}\`** Olarak ayarladım.`).setColor(open.embedTrue)
  message.channel.send(embed2)})
  } else if(args[0] == "kapat") {
    const embed2= new Discord.MessageEmbed().setDescription('<a:olmaz:769202870612131840> | Sunucu Tagını Sıfırlamam için ilk önce **ayarlanması** lazım!').setColor(open.embedFalse)

    if(!docs.tag) return message.channel.send(embed2)
    
    data.findOneAndUpdate({sunucu : message.guild.id},{$set : { tag : null}},function(err,docs){

      const embed3 = new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | Sunucu Tagını Başarıyla Sıfırladım.`).setColor(open.embedTrue)
    message.channel.send(embed3)})
  } else {
          const embed4 = new Discord.MessageEmbed().setDescription(`<a:olmaz:769202870612131840> | **Geçersiz İşlem**, Lütfen Bir İşlem Girin : \`${p}tag <kapat/ayarla> <tag>\``).setColor(open.embedFalse)
message.channel.send(embed4)
    return
  }
  })
};

exports.help = {
    name : "tag",
    aliases : [],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "tag <kapat/ayarla> 主",
    description : "tag rol Sunucunuzun Tagını ayarlar "
}