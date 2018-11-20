const Discord = require('discord.js');
const fs = require('fs');
const sql = require("sqlite");
sql.open("./database/regdatabase.sql");

const moment = require('moment');
exports.run = async (client, message, args) => {
    // eu ia fazer comentarios sobre como funciona tudo aq mas, deu uma preguiça né
    if(!message.member.roles.some(r=>["❪📁❯ Equipe de Registro ★"].includes(r.name)) )
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, você precisa ter o cargo <@&513187405319110669> para usar esse comando.`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);
    let user = rUser.id;
    sql.get(`SELECT * FROM registervalDatabase WHERE userID = "${user}"`).then(function(row) {
    if(!row) return message.reply("Esse usuário não fez nenhum registro até o momento.");    
    let embed = new Discord.RichEmbed();
    embed.setColor(0xff3232);
    embed.setDescription(`**Usuário:** ${row.username} \n **ID =** ${row.userID} \n **Registros:** ${row.registers}`);
    embed.setAuthor(message.guild.name, message.guild.iconURL);
    embed.setFooter(`${message.author.username} ◾ ${moment(embed.timestamp).format('LLLL')}`, message.author.avatarURL);
    embed.setThumbnail(message.author.avatarURL);
    client.channels.get(message.channel.id).send(embed);
});
}