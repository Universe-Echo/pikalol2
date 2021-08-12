const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'avatar',
    async execute(client, message, args) {
        const member = message.mentions.members.first() || message.member;
     const avatar =   new MessageEmbed()
            .setTitle(`${member.user.tag}'s avatar`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor('BLACK')
            .setTimestamp()
            message.channel.send({ embeds: [ avatar ] });
    }
}