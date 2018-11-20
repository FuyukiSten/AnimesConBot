const Discord = require('discord.js');
const wait = require('util').promisify(setTimeout);
module.exports = async (client, member) => {
  const channel = client.channels.get(client.config.bemvindocanal);
  if (!channel) return;
  channel.send(`${member}**, bem-vindo ao servidor.**`);

};
