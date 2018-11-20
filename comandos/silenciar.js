const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES"))
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você precisa ter a permissão ` + '`MANAGE_ROLES`' +   ` para usar esse comando.`);
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
    embed.addField('**Usuário silenciado:**', `${_m}`, true);
    embed.addField('**Moderador:**', `${message.author}`, true);
    embed.addField('**Motivo:**', '```css'+`\n${_r}`+'\n```');
    client.channels.get("513731762275483650").send(embed);
    _m.send(`**Você foi silenciando no servidor ${message.guild.name}**\n${_r}`);
    _m.addRole("513821858353905674");
}