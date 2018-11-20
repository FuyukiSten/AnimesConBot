const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS"))
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você precisa ter a permissão ` + '`BAN_MEMBERS`' +   ` para usar esse comando.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    };

    let _m = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!_m) 
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você precisa providenciar o ID ou mencionar um membro valido.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }
    let _r = args.slice(1).join(' ');
    if(!_r) {
        _r = "Sem motivo definido";
    }

    let embed = new Discord.RichEmbed();
    embed.addField('**Usuário banido:**', `${_m}`, true);
    embed.addField('**Moderador:**', `${message.author}`, true);
    embed.addField('**Motivo:**', '```css'+`\n${_r}`+'\n```');
    client.channels.get("513731762275483650").send(embed);
    await  _m.send(`**Você foi banido do servidor ${message.guild.name}**\n${_r}`);
    await _m.ban(_r);
}