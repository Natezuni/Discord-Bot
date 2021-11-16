
const { Message } = require("discord.js")
const fs = require('fs');
const Salty = "xxx";
const Octo = "xxx";

module.exports = {
    exec: function (message) {

        if (message.author.id === Salty) {
            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[32m", `${msg.author.username} executed 'execMsg' SUCCESSFULLY`))
                .catch(console.error);
            let execMessage = message.content.slice(6, message.content.length);
            message.channel.send(execMessage);

        } else if (message.author.id === Octo) {

            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[32m", `${msg.author.username} executed 'execMsg' SUCCESSFULLY`))
                .catch(console.error);
            let execMessage = message.content.slice(6, message.content.length);
            message.channel.send(execMessage);

        } else {
            message.channel.send(`You don't have perms, Please contact Nathan for more info.`);
            message.delete({ timeout: 0 })
                .then(msg => console.log("\x1b[31m", `ExecMsg command DENIED to ${msg.author.username}`))
                .catch(console.error);

        }


    }
}
