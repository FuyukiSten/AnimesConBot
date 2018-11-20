const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!client.config.lords.includes(message.author.id)) 
    {
        let _e = new Discord.RichEmbed();
        _e.setColor(0xff3232);
        _e.setDescription(`${message.author}, sem permissão !`);
        client.channels.get(message.channel.id).send(_e);
        return;
    }
    try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
}