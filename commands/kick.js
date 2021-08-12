const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kicks a member',
    async execute(Client, message, args) {
        if (!message.member.guild.me.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('I dont have the perms to do this!')
        }
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('You dont have the perms to do this!')
        }
        try {
            const reason = args.slice(1).join('  ');

            if (!args[0]) return message.channel.send('Please tell me a user to kick!');
            const kickMember = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
            if (!kickMember) return message.channel.send('Please provide a valid member!');
            if (kickMember === message.member) return message.channel.send('You dumb, you cannot KICK yourself');
            if (!kickMember.kickable) return message.channel.send('I cant kick that User');

            await kickMember.send(`You were kicked from **${message.guild.name}**\nReason: ${reason || 'no reason provided'}`).catch(() => { })
            kickMember.kick();

            const kicked = new MessageEmbed()
                .setDescription('***User Kicked!***')
                .addField('User', `${kickMember}`, true)
                .addField('Reason', `${reason}` || 'no reason provided', true)
                .setColor('RANDOM')

            message.channel.send({embeds: [kicked]})


        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
        }

    }
}