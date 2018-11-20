const Discord = require('discord.js');
const request = require("snekfetch");
exports.run = async (client, message, args) => {

    let menção = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!menção) 
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você precisa providenciar o ID ou mencionar um membro valido.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }

    if(menção.id == message.author.id) {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você não pode abraçar você mesmo.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }

    request.get('https://nekos.life/api/v2/img/hug').end((err, response) => {
    let embed = new Discord.RichEmbed();
    embed.setColor('RANDOM');
    embed.setTitle(`${menção.user.username}#${menção.user.discriminator} foi abraçado por ${message.author.username}#${message.author.discriminator}`);
    embed.setImage(response.body.url);

    client.channels.get(message.channel.id).send(embed); // ou apenas message.channel.send(embed);
    });
};