
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    slowmode: function (message) {
        if (message.member.roles.cache.has('783449006101495848') || message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325') || message.member.roles.cache.has('766473163335925811')) {
            var time = message.content.split(' ').slice(1).join(' ');
            message.channel.setRateLimitPerUser(time);
            message.channel.send(`**Slowmode set to ${time} seconds**`);
        } else {
            message.channel.send("You don't have the permissions for that.");
        }
    }
}
