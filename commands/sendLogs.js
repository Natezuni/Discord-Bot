const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    logs: function (message) {
        var password = message.content.slice(6, message.content.length);
        if (message.member.roles.cache.has('727646416834396171') && message.channel.id === '767602458930184193' && password === '70617373776f72640a') {
            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[32m", `Logs Access Granted to ${msg.author.username}`))
                .catch(console.error);
           message.channel.send("This should be kept 100% private.", { files: ["./txt-files/logs.txt"] });
        } else if (message.member.roles.cache.has('727646559675614325') && message.channel.id === '767602458930184193' && password === '70617373776f72640a') {
            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[32m", `Logs Access Granted to ${msg.author.username}`))
                .catch(console.error);
           message.channel.send("This should be kept 100% private.", { files: ["./txt-files/logs.txt"] });
        } else {
            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[31m", `Logs Access DENIED to ${msg.author.username}`))
                .catch(console.error);
            message.channel.send("Denied Access");
        }
        console.log("\x1b[0m", "");
    }
}
