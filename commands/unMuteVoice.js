const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    mute: function (message) {

        if (message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325')) {
            if (message.member.voice.channel) {
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                for (const [memberID, member] of channel.members) {
                    member.voice.setMute(false);
                }

            }
            message.channel.send("Unmuted Voice.");
        } else {
            message.channel.send("You don't have the permissions to do that.");
        }
    }
}
