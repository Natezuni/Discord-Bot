const { Message } = require("discord.js")

module.exports = {
   test: function(message) {
       return message.channel.send('pong');
   }
}
