const open = require('../open.json')
module.exports.start = (client,Discord) => {
  client.sendTrue = (message,channel) => {
    if(!channel || !message) throw new TypeError('Please Write message and Channel.')
    if(typeof message !== "string") throw new Error('Embed Message Type is Must of Type String Your Type: ' + typeof message)
    const embed = new Discord.MessageEmbed().setColor(open.embedTrue)
    .setDescription(`<a:olur:769202869151989761> | ${message}`)
  channel.send(embed)
  }
  client.sendFalse  = (message,channel) => {
    if(!channel || !message) throw new Error('Please Write message and Channel.')
    if(typeof message !== "string") throw new TypeError('Embed Message Type is Must of Type String Your Type: ' + typeof message)
    const embed = new Discord.MessageEmbed().setColor(open.embedFalse)
    .setDescription(`<a:olmaz:769202870612131840> | ${message}`)
     channel.send(embed)
  }
}