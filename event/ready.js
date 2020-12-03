const Discord = require('discord.js')

const moment = require('moment')
const open = require('../open.json')
let zaman = moment().format("HH:mm:ss")
var prefix = open.prefix
const log = message => {
    console.log(`${zaman} | ${message}`);
};
module.exports = async client => {
let size = client.guilds.cache.reduce((a,b) => a  + b.memberCount, 0).toLocaleString()
    log(`${client.user.username} | ${client.guilds.cache.size} Sunucu ve ${size} Kullanıcı`)

    client.user.setStatus("online");
    var oyun = [
      `💣| s!yardım | ${client.guilds.cache.size} Sunucu  ${size} Kullanıcı!`,
      `💣| s!kontrol kayıt | Kayıt Sistemi çalışmıyorsa Eksiklerinizi Görün!`,
      `💣| s!prefix ayarla | Prefixi Değişebilirsiniz!`
  ];
        setInterval(function() {
      var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
  
      client.user.setActivity(oyun[random],"",{type: 'WATCHİNG'});
    }, 2 * 2500);
}
