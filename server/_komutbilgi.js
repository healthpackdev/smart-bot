const discord = require('discord.js')
const open = require('../open.json')
exports.run = async(client, message, args,p) => {
    let command = args[0];
    let dm;
    let dm2; 
    let dm3;
let cv;

    const embıre = new discord.MessageEmbed()
    .setTitle('Komut Bulunamadı.')
    .setDescription(`Lütfen bir komut adı giriniz : **${p}komut <komut-adı>**`)
    .setColor('RED')

    if(!command) return message.channel.send(embıre).then(a => a.delete({timeout : "4000"}))

    if(client.commands.get(command)) {
        command = client.commands.get(command)
    } else if(client.commands.get(client.aliases.get(command))) {
   command = client.commands.get(client.aliases.get(command))
 } else {
         const embır = new discord.MessageEmbed()
         .setTitle('Komut Bulunamadı.')
         .setDescription(`\`${args[0]}\` Adında Bir komut Bulamadım`)
         .setColor('RED')
         message.channel.send(embır).then(a => a.delete({timeout : "4000"}))
     }
  
   if(command.help.open === false) dm = `Kapalı` 
   if(command.help.open === true) dm = `Açık` 
   if(command.help.perm) dm2 = `${command.help.perm}`
   if(!command.help.perm) dm2 = `Yetki Gerekmiyor`
   if(!command.help.aliases) dm3 = `Alternatif Kullanım yok`
   if(command.help.aliases) dm3 = `${command.help.aliases.map(a => `${p}${a}`).join(" - ")}`

   if(command.help.pre == true) cv = "#fdff00"
   if(!command.help.pre) cv = "#00f6fd"

   const replaced = dm2
   .replace('MANAGE_MESSAGES','Mesajları Yönet')
   .replace('ADMINISTRATOR','Yönetici')
   .replace('MANAGE_CHANNELS','Kanalları Yönet')
   .replace('VIEW_AUDIT_LOG','Denetim Kaydını Görüntüle')
   .replace('VIEW_GUILD_INSIGHTS','Sunucu Bilgilerini Görüntüle')
   .replace('MANAGE_NICKNAMES','Kullanıcı Adlarını Yönet')
   .replace('MANAGE_ROLES','Emojileri Yönet')
   .replace('MANAGE_WEBHOOKS','WebHookları Yönet')
   .replace('MANAGE_EMOJIS','Emojileri Yönet')
   .replace('MENTION_EVERYONE','@everyone Pingle')
   .replace('owner','Sunucu Sahibi')
   .replace('MANAGE_GUILD','Sunucuyu Yönet')
   .replace('no','Yetki Gerektirmiyor')
   .replace('BAN_MEMBERS','Üyeleri Engelle')
   .replace('KİCK_MEMBERS','Üyeleri at')
let e = "https://cdn.discordapp.com/attachments/733962463946473504/764558451342049350/bilgilendirme.png"
   const em = new discord.MessageEmbed()
   .setAuthor(command.help.name,e)
   .setColor(cv)
   .addField('Hakkında','**``'+command.play.description+'``**')
   .addField('Kullanım','```'+p+command.play.usage+'```')
   .addField('Alternatifler','``'+dm3+'``')
   .addField('💂 - Hizmet ','``'+dm+'``',true)
   .addField('💂 - Gereken Yetki','``'+replaced+'``',true)
   
   .setFooter(client.commands.size + ' Komuta Sahibim')
  return message.channel.send(em)
   
     

       
    


}
exports.help = {
    name : "komut",
    aliases : ['komut-bilgi'], 
    open : true,
    perm : "no",
    limit : "2"
}
exports.play = {
    usage : "örnek-komut",
    description : "Örnek bir komut yapısı",
   kategori : ""
}