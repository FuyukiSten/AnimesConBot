const Discord = require('discord.js');
const sql = require("sqlite");
const moment = require('moment');
        moment.locale('pt-BR');
exports.run = async (client, message, args) => {
    let rUser = message.author
    let user = rUser.id;
    let max = 0;
    let final;
    let A_1 = message.guild.fetchInvites()
      .then(r=> {
        let A_2 = r.array();
        for (let i = 0; i < A_2.length; i++) {
          let convite = A_2[i];
          if (convite.inviter.id === user) {
            final = convite.uses;
  
            if (final > max) {
              max = final;
            }
          }
        }
        final = max;
        let iNvEr = final;
    let _c = client.channels.get(message.channel.id);
    let embed = new Discord.RichEmbed();
    embed.setColor(0xff3232);
    embed.setAuthor(message.guild.name, message.guild.iconURL);
    embed.addField(`**Você convidou:**`, '```markdown\n' + `# ${iNvEr} pessoas` + '\n```');
    embed.setFooter(`${message.author.username} ◾ ${moment(embed.timestamp).format('LLLL')}`, message.author.avatarURL);
    embed.setThumbnail(message.author.avatarURL)
    _c.send(embed);
    })} // kibado de um github, nao lembro qualkkkkkkkkkkk