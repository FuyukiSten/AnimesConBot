const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const fs = require('fs')
    let _c = client.channels.get(message.channel.id);
    let embed = new Discord.RichEmbed();
    embed.setTitle('Comandos do bot');
    embed.setColor(0x36393f);
    embed.setDescription(fs.readdirSync('./comandos').map(a=> a.replace('.js',"")).join('\n')    )
    embed.setFooter('Versão: 0.1', message.guild.iconURL);
    _c.send(embed);
}