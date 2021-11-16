const Discord = require('discord.js');
const client = new Discord.Client();
const Salty = "xxx";
const Octo = "xxx";

module.exports = {
    mute: function (message) {
        if (message.member.roles.cache.has('727646416834396171') || message.member.roles.cache.has('727646559675614325')) {
            if (message.member.voice.channel) {
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                for (const [memberID, member] of channel.members) {
                    member.voice.setMute(true);
                    if (member.roles.cache.has("727646416834396171") || member.roles.cache.has("727646559675614325") || member.roles.cache.has("766473163335925811")) {
                        member.voice.setMute("false");
                    }
                }
                
            }
            message.channel.send("Muted Voice.");
        } else {
            message.channel.send("You don't have permission to do that.");
        }
    }
}