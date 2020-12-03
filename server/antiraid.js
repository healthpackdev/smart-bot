const Discord = require('discord.js')
const open = require('../open.json')

exports.run = async(client, message, args, p,db) => {

var ne = args[0]
var f = await db.findOne({sunucu : message.guild.id})
if(ne == "ayar") {
    
    if(f.anti.raid) {
        await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"anti.raid":false}})
        return client.sendTrue(`**Anti Raid Kapatıldı **`,message.channel)
    }
    if(!f.anti.raid){
        await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"anti.raid":true}})
        return client.sendTrue(`**Anti Raid Açıldı** Botun Rolünü Üste Almayı Unutmayınız`,message.channel)
    }
} else if(ne == "izin") {
    if(!f.anti.raid) return message.reply('Anti Raidi Açmalısın...')
    var id = args[1]
    if(!id) return client.sendFalse(`İşlem Yapılacak Botun ID Girmelisin`,message.channel)
    if(isNaN(id) || id.length != 18) return client.sendFalse(`ID Sadece Sayı ve **18** Basamaklıdır`,message.channel)
    var kont = f.anti.white.some(id2 => id2 == id)
    if(kont){


        await db.findOneAndUpdate({sunucu : message.guild.id},{$pull : {"anti.white":id}})
        client.sendTrue(`\`${id}\` ID li Bot Sunucuya Giriş **İzni Alındı**`,message.channel)
    } else {

        await db.findOneAndUpdate({sunucu : message.guild.id},{$push : {"anti.white":id}})
        client.sendTrue(`\`${id}\` ID li Bot Sunucuya Giriş **İzni Verildi**`,message.channel)
    }
} else if(ne == "log"){
var ch = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
if(!ch|| ch.type !== "text") return client.sendFalse(`Log Kanalını Ayarlamak İçin Bir Kanal Etiketle`,message.channel)

await db.findOneAndUpdate({sunucu : message.guild.id},{$set : {"anti.log":ch.id}})
client.sendTrue(`Anti Raid Log Kanalı ${ch} Olarak Ayarlandı`,message.channel)
}else {
    const antiraid = new Discord.MessageEmbed().setTitle('Anti Raid Sistemi').setURL('https://discord.com/api/oauth2/authorize?client_id=769110620359622676&permissions=8&scope=bot')
    .setDescription(`Botu Ekleyen Sunucu Sahibi İse Es Geçer\n**Botun Rolünü Üste Alınki İzin Verilmeyen Botları Kickleyebilsin**`)
    .addField(`<:sagadogru:769202699434459197>__${p}antiraid ayar__`,`Anti Raid Açıksa Kapar Kapalıysa Açar`)
    .addField(`<:sagadogru:769202699434459197>__${p}antiraid izin <id>__`,`Anti Raid Bir Bota İzin Verir Ve Sunucuya Girebilir`)
    .addField(`<:sagadogru:769202699434459197>__${p}antiraid log #kanal>__`,`Anti Raid Log Kanalını Ayarlarsınız`)
   
    .setFooter('Anti Raid Sistemi',message.author.avatarURL({dynamic : true}))
    .setColor('#be1313')
    if(f.anti.raid){
        antiraid.addField(`<:sagadogru:769202699434459197>__İzin Verilen Botlar__:`,`
        ${f.anti.white.map(a => `\`${a}\``).join("\n")||"**İzin Verilen Herhangi Bir Bot yok.**"}
        
        `)
        }
    message.channel.send(antiraid)
}
 
}
exports.help = {
    name : "antiraid",
    aliases : ['anti-raid'],
    open : [true],
    perm : "owner"
   
}
exports.play = {
    usage : "antiraid <ayar> <ayarı>",
    description : "Anti Raid Sistemi ile Sunucunuza Yabancı Bot Girmesini Önleyin"
}
