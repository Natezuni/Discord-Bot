const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    random: function (message) {
        if (!message.member.roles.cache.has('727646416834396171')) {
            message.channel.send('You do not have the permissions for that!');
        }
        if (message.member.roles.cache.has('727646416834396171')) {
            
            let choice = ["test1", "test2", "test3"];

            var random = choice[Math.floor(Math.random()*choice.length)];
            message.channel.send(`The winner of the giveaway is: ${random}`);
        }
    }
}












