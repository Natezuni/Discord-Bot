const { Message } = require("discord.js")

module.exports = {
   status: function(message) {
       return message.channel.send('Online');
   }
}
