const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS"))
    {
        let _e = new Discord.RichEmbed(0xff3232);
        _e.setColor();
        _e.setDescription(`${message.author}, você precisa ter a permissão ` + '`KICK_MEMBERS`' +   ` para usar esse comando.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    };

    let _m = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!_m) 
    {
        let _e = new Discord.RichEmbed(0xff3232);
        _e.setColor();
        _e.setDescription(`${message.author}, você precisa providenciar o ID ou mencionar um membro valido.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }
    let _r = args.slice(1).join(' ');
    if(!_r) {
        _r = "Sem motivo definido";
    }

    let embed = new Discord.RichEmbed();
    embed.addField('**Usuário expulso:**', `${_m}`, true);
    embed.addField('**Moderador:**', `${message.author}`, true);
    embed.addField('**Motivo:**', '```css'+`\n${_r}`+'\n```');
    client.channels.get("513731762275483650").send(embed);
    await  _m.send(`**Você foi expulso do servidor ${message.guild.name}**\n${_r}`);
    await _m.kick(_r);
}