const open = require('../open.json');
const ş = require('../database/şema/Sunucu.js')
const Discord = require('discord.js')

module.exports = async message => {
let client = message.client
if(!message.guild) return;
if (message.author.bot) return;

let me = await ş.findOne({sunucu : message.guild.id})
if(!me){
     const e = new ş({sunucu : message.guild.id})
    return await e.save()
   }
  let p = me.prefix || open.prefix

    if(message.content.includes(`<@${client.user.id}>`) || message.content.includes(`<@!${client.user.id}>`)) {
    const e1 = new Discord.MessageEmbed().setDescription(`***Sunucuda Prefixim \`${p}\` Değişmek için \`${p}prefix ayarla <p>\`***`).setColor('BLUE')
    message.channel.send(e1).then(a => a.delete({timeout : "10000"}))
  }
                                                              
  if(message.content.toLowerCase() == "tag") {
    ş.findOne({sunucu : message.guild.id},function(err,docs){
  let fetch = docs.tag
  if(docs.tag)  message.channel.send(`\`${fetch}\``)
    })
  }
  
  if (!message.content.startsWith(p)) return;
  let command = message.content.split(" ")[0].slice(p.length).toLowerCase()
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  } 
  
  
  if (cmd) {
    try {
 let liste = ['588414969364873236']
if(liste.some(user => message.author.id == user)){
  const kara = new Discord.MessageEmbed()
  .setTitle('Kara Listedesin')
  .setDescription(`Kara Listedesin Hiç bir Komutu Kullanmana İzin vermem`)
  .setColor('BLUE')
  .addField(`Açtırmak İçin`,`Destek Sunucumuza gelip Dilenebilirsiniz XD [Tıkla](${open.link})`)
  .setFooter(message.author.username,message.author.avatarURL({dynamic : true}))
return message.channel.send(kara)
}


    if (cmd.help.open[0] == false) {
        if(!open.sahip.includes(message.author.id)) {
          const embed = new Discord.MessageEmbed()
                      .setDescription(`<a:olmaz:769202870612131840> | **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`).addField('``Sebep``','**'+cmd.help.open[1]+'**')
                      .setColor("RED")
                  message.channel.send(embed)
                  return
        }
      }

  if(cmd.help.perm) {
if(cmd.help.perm !== "no") {

    if(cmd.help.perm == "owner") {
      if(message.author.id !== message.guild.owner.id && !open.sahip.includes(message.author.id)) {

      const embed = new Discord.MessageEmbed()
      .setAuthor('Yetersiz Yetki','https://cdn.discordapp.com/emojis/781470058371219467.png?v=1')
                      .setDescription(`Bu Komutu Sadece **<@${message.guild.owner.id}>** Kullanabilir.`)
                       .setColor('#14d2e0')
                      .setTimestamp()
                      .setFooter(message.author.username,message.author.avatarURL({dynamic : true}))
                  message.channel.send(embed)
                  return
      }
    } else {
         if(!message.member.hasPermission(cmd.help.perm) && !open.sahip.includes(message.author.id) && cmd.help.perm !=="owner") {
        let pem = cmd.help.perm
        const replaced = pem.replace('MANAGE_MESSAGES','Mesajları yönet').replace('MANAGE_CHANNELS','Kanalları Yönet').replace('VIEW_AUDIT_LOG','Denetim Kaydını Görüntüle').replace('VIEW_GUILD_INSIGHTS','Sunucu Bilgilerini Görüntüle').replace('MANAGE_NICKNAMES','Kullanıcı Adlarını yönet').replace('MANAGE_ROLES','Emojileri Yönet').replace('MANAGE_WEBHOOKS','WebHookları Yönet',).replace('MANAGE_EMOJIS','Emojileri yönet').replace('MENTION_EVERYONE','@everyone pingle').replace('ADMINISTRATOR','Yönetici').replace('MANAGE_GUILD','Sunucuyu Yönet').replace('BAN_MEMBERS','Üyeleri Engelle').replace('KİCK_MEMBERS','Üyeleri at')
      const embed = new Discord.MessageEmbed()
                 .setAuthor('Yetersiz Yetki','https://cdn.discordapp.com/emojis/781470058371219467.png?v=1')
                      .setDescription(`Bu Komutu Kullanabilmek İçin **\`${replaced}\`** Yetkisine İhtiyacın var.`)
                      .setColor('#14d2e0')
                      .setTimestamp()
                      .setFooter(message.author.username,message.author.avatarURL({dynamic : true}))
                  message.channel.send(embed)
                  return
         }
  }
}
}

    cmd.run(client, message, params, p,ş)
  
      } catch(e) {
    const hata = new Discord.MessageEmbed().setColor(open.embedFalse)
    .setDescription(`\`${e}\` \n\n Hata için Destek sunucumuza gelebilirsin. [Link](${open.link})`)
    .setFooter(open.bot,client.user.avatarURL({dynamic : true, format :"png"}))
  message.channel.send(hata)
            return
          }
  }






 
}//HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK/HEALHTPACK




