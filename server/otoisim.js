const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {

let ne = args[0]
if(ne == "ayarla") {
if(!args.slice(1).join(" ")) return client.sendFalse(`Yapılacak İsmi Girmelisin`,message.channel)
if(args.slice(1).join(" ").length > 15) return client.sendFalse(`Max. **19** Karakter Girebilirsin`,message.channel)
await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {otoisim : args.slice(1).join(" ")}})
client.sendTrue(`Oto İsim başarıyla **${args.slice(1).join(" ")}** Olarak Ayarlandı`,message.channel)
} else if(ne =="kapat"){
let varme = await db.findOne({sunucu : message.guild.id})
if(!varme.otoisim) return client.sendFalse(`Oto İsim Sistemi Zaten Ayarlanmamış`,message.channel)

await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {otoisim : null}})
client.sendTrue(`Oto İsim başarıyla Kapatıldı`,message.channel)
} else {
    const otoisim = new Discord.MessageEmbed().setTitle('Oto İsim Sistemi').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
    .addField(`<:elmas:779701065997090816>__${p}otoisim ayarla <isim>__`,`Oto İsimi Ayarlamak İçin`)
    .addField(`<:elmas:779701065997090816>__${p}otoisim kapat__`,`Oto İsimi Kapatmak İçin`)
    .addField(`<:elmas:779701065997090816>Değişkenler:`,`
    > \`{username}\` Gelen kullanıcının \`${message.author.username}\` Şeklinde Adı

    **Örnek**: \`${p}otoisim ayarla isim | yaş\`

    Gelen Kullanıcının İsmini \`isim | yaş\` yapar
    `).setFooter('Oto isim Sistemi').setColor('#15caf1')
    message.channel.send(otoisim)
}

 
}
exports.help = {
    name : "otoisim",
    aliases : ['oto-isim'],
    open : [true],
    perm : "MANAGE_GUILD"
   
}
exports.play = {
    usage : "otoisim <isim>",
    description : "Sunucuya Gelenlere Otomatik İsim Koyar"
}
