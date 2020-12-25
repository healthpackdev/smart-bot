const Discord = require('discord.js')
const fs = require('fs')

const moment = require('moment')
const open = require('../open.json')
module.exports.run = (client) => {
let zaman = moment().format("HH:mm:ss")
const log = message => {
    console.log(`${zaman} | ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./server/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
      if(!f.endsWith('.js'))return console.error(`${f}, Komutunun Sonu .js Olmadığı için Es Geçtim`)
        let yasin = require(`../server/${f}`);
      if(!yasin.help) return console.error(`${f}, Komutun => exports.help = {} <= Kısmı yok.`)
        client.commands.set(yasin.help.name, yasin);
        yasin.help.aliases.forEach(alias => {
            client.aliases.set(alias, yasin.help.name);
        });
    });
  console.log(`${client.commands.size} Komut ve ${client.aliases.size} Alternatif Komut yüklendi.`)//help
});



}
