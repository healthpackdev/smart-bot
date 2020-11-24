const Discord = require('discord.js');
const kyt = require('../database/şema/kayıt.js')
exports.run = async(client, message, args,p,data) => {
  let guild = message.guild;
   message.channel.send('Bunu Yapmak istediğine emin misin(evet ve hayır) Bu işlem Sunucundaki verilerimi tamamen siler')
      let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'hayır' || choice == 'h') return message.channel.send(`**<:noki:748905994188226630> |** İşlem İptal edildi`)
        if (choice !== 'evet' && choice !== 'e' && choice !=="hayır"&&choice !=="h") {
            message.channel.send(`Lütfen sadece **hayır(h) ve evet(e)**.`) 
        }
        if (choice == 'evet' || choice == 'e') uwu = true
    }
    if (uwu) {
await kyt.deleteMany({Guild : message.guild.id})
await data.findOneAndDelete({sunucu : message.guild.id})
      let yn = new data({
        sunucu : message.guild.id
      })
    await yn.save()
      
 message.channel.send(`** Bottaki Tüm veriler sıfırlandı **`)

    }


}
exports.help = {
    name : "sıfırla",
    aliases : [''],
    open : true,
    perm : "owner",
   
}
exports.play = {
    usage : "sıfırla",
    description : "Sunucudaki bot verilerini sıfırlar"
}