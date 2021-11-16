const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    kill: function (message) {
        if (!message.member.roles.cache.has('783449006101495848') || message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325') || message.member.roles.cache.has('766473163335925811')) {
            message.channel.send('You do not have the permissions for that!');
        }
        if (message.member.roles.cache.has('783449006101495848') || message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325') || message.member.roles.cache.has('766473163335925811')) {
            message.channel.send("Shutting down...").then(() => {
                return process.exit(1);
            })
        }
    }
}











