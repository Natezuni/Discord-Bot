const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    bruh: function (message) {
        if (!message.member.roles.cache.has('727646416834396171')) {
            message.channel.send('You do not have the permissions for that!');
        }
        if (message.member.roles.cache.has('727646416834396171')) {
            for(i = 0; i < 10; i++) {
                message.channel.send('bruh');
            }
        }
    }
}
