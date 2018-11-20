const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let _c = client.channels.get(message.channel.id);
    let _m = await _c.send("Ping ?");
    let embed = new Discord.RichEmbed();
    embed.setTitle('Pong !');
    embed.setColor(0xff3232);
    embed.addField('🤖 | Latência', `${_m.createdTimestamp - message.createdTimestamp}ms`, true);
    embed.addField('📡 | Latência da API', `${Math.round(client.ping)}ms`, true);
    _m.edit(embed);
}