const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const d = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: | Use esse comando somente em canais adultos.")

    var subreddits = [
        'pussy',
        'rearpussy',
        'simps',
        'vagina',
        'MoundofVenus',
        'PerfectPussies',
        'spreading'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                message.channel.send(r.body);
            })
        })
}