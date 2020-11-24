const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args,p,data) => {

const embed1 = new Discord.MessageEmbed().setAuthor(message.author.username).setDescription(`
 **Bu mesajdan sonra 30 saniye içinde isim-yaş düzenini söyle**

 Değişkenler : {isim} / {yas}
 Örnek :  主 {isim} | {yas}

**Şeklinde yazarsan kayıt sırasında bu şekilde kayıt eder**

Kapatmak istersen \`kapat\` yazman yeterlidir.
  `).setColor('BLUE').setFooter('30 saniye sonra iptal edilecektir')


let owo = false;
  while(!owo) {
    
    
      message.channel.send(embed1)
    try {
const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000, errors:['time'] });
        const choice = response.first().content
if(choice == "kapat") {
  owo = "kapat"; 
 await data.findOneAndUpdate({sunucu : message.guild.id},{$set : { Idüzen : null}},function(err,docs){
  message.channel.send(new Discord.MessageEmbed().setDescription(`<a:olur:769202869151989761> | İsim Düzeni Kaldırıldı ve Normaline döndü`).setColor(open.embedTrue))})
}
    
    
if(choice !== "kapat") owo = true;

  if(owo !== "kapat") {
    const embed2 = new Discord.MessageEmbed().setColor(open.embedTrue).setDescription(`
İsim Düzeni \`${choice}\` Olarak ayarlandı. Kayıt olanlar bu şekilde ismi düzenlenecek.

(**Kayıt ederken Kayıt Sorumlusu İsim ve yaş Yazmaz ise değiştirilmez**) `)
   data.findOneAndUpdate({sunucu : message.guild.id},{$set : { Idüzen : choice}},function(err,docs){
    message.channel.send(embed2)
   })
  }
    
  } catch(e) {
    return message.reply('İşlem Süren bitti.')
  }

  }
}
exports.help = {
    name : "isim-düzeni",
    aliases : ['isimdüzen','i-düzen','isim-düzen'],
    open : true,
    perm : "MANAGE_GUILD",
    limit : "0"
   
}
exports.play = {
    usage : "isim-düzeni",
    description : "Kayıt ediltikten sonra İsimin nasıl yapılacağı"
}
