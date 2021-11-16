const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    users: function (message) {

        let guild = client.guilds.cache.get('727640959634112553');
        const Embed = new Discord.MessageEmbed();
        let percentage = (message.guild.members.cache.filter(member => member.presence.status !== "offline").size / message.guild.members.cache.filter(member => member.presence.status == "offline").size) * 100;

        Embed.setTitle(`Server Activity`);
        Embed.addField("Online Members", message.guild.members.cache.filter(member => member.presence.status !== "offline").size);
        Embed.addField("Offline Members", message.guild.members.cache.filter(member => member.presence.status == "offline").size);
        Embed.addField("Online User Ratio:", `${percentage.toFixed(2)}%`)
        return message.channel.send(Embed);

    }
}
