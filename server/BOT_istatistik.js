
const Discord = require('discord.js');
const moment = require("moment");
const open = require('../open.json');
const os = require("os");
const m = require('mongoose')
const likes = require('../database/şema/begendim.js');
const d = require('../database/şema/kayıt.js')
require("moment-duration-format");
exports.run = async (client, message, args,p,data) => {
const reducer = (accumulator, currentValue) => accumulator + currentValue.memberCount;
const reducer2 = (a,b)=> a + b.channels.cache.size;
const reducer3 = (a,b)=> a + b.roles.cache.size;
const reducer4 = (a,b)=> a + b.channels.cache.size;

const vr = await data.find()
const vr2 = await d.find()
const vrs = vr2.length + vr.length

let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
let günler = {
  "01" : "1",
  "02" : "2",
  "03" : "3",
  "04" : "4",
  "05" : "5",
  "06" : "6",
  "07" : "7",
  "08" : "8",
  "09" : "9",
  "00" : "0",
  
}
let aylar = aylartoplam;
 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)

const Embed = new Discord.MessageEmbed().setTitle('Smart').setDescription(`\`Developer\`: **healthpackTR#9999 ve Doruk330#0001**`)
.addField('``Bot Bilgileri``',`
<a:altin2:769202957794672680>__**Sunucu Sayısı**__: \`${client.guilds.cache.size}\`
<a:altin2:769202957794672680>__**Kullanıcı Sayısı**__ : \`${client.guilds.cache.reduce(reducer,0)}\`
<a:altin2:769202957794672680>__**Kanal Sayısı**__ : \`${client.guilds.cache.reduce(reducer2,0)}\`
<a:altin2:769202957794672680>__**Rol Sayısı**__ : \`${client.guilds.cache.reduce(reducer3,0)}\`

`,true).addField('``Versiyon Bilgileri``',`
<a:altin2:769202957794672680>__**Discord.js**__ : \`${Discord.version}\`
<a:altin2:769202957794672680>__**Node.js**__ : \`${process.version}\`
<a:altin2:769202957794672680>__**Moment**__ : \`${moment.version}\`
<a:altin2:769202957794672680>__**Mongoose**__ : \`${m.version}\`

`,true).addField('``Donanım ve Kullanım Bilgileri``',`
__**CPU**__\`\`\`diff
- ${os.cpus().map(a => `${a.model}`)[0]}\`\`\`
__**İşletim Sistemi**__ : \`${os.platform()}\`
__**Ram Kullanımı**__ : \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\`
__**Toplam Ram**__ : \`${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)}mb\`
__**Ping**__ : \`${client.ws.ping}\`
__**Bit**__ : \`${os.arch()}\`
__**Veri Sayısı**__ : \`${vrs}\`
`).addField('``Ekstra Bilgiler``',`
__**Komut Sayısı**__ : \`${client.commands.size}\`
__**Veri tabanı**__ : [MongoDB](https://www.mongodb.com)
__**Kuruluş**__ : \`${s}\`

`).setColor('#cbf107')
  message.channel.send(Embed)
}
exports.help = {
    name : "istatistik",
    aliases : ['i'],
    open : true,
    perm : "no",
    limit : "0"
   
}
exports.play = {
    usage : "istatistik",
    description : "Botun İstatistiktiklerini gösterir"
}
