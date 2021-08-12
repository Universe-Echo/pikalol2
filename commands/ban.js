const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'BANS a member',
    async execute(Client, message, args) {
        if (!message.member.guild.me.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('I dont have the perms to do this!')
        }
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('You dont have the perms to do this!')
        }
        try {
            const reason = args.slice(1).join('  ');

            if (!args[0]) return message.channel.send('Please tell me a user to ban!');
            const banMember = message.mentions.members.first() || await message.guild.members.fetch(args[0]);
            if (!banMember) return message.channel.send('Please provide a valid member!');
            if (banMember === message.member) return message.channel.send('You dumb, you cannot BAN yourself');
            if (!banMember.bannable) return message.channel.send('I cant ban that User');

            await banMember.send(`You were banned from **${message.guild.name}**\nReason: ${reason || 'no reason provided'}`).catch(() => { })
            banMember.ban({ days: 7 });

            const banned = new MessageEmbed()
                .setDescription('***User Banned!***')
                .addField('User', `${banMember}`, true)
                .addField('Reason', `${reason}` || `no reason provided`, true)
                .setColor('RANDOM')

            message.channel.send({embeds: [banned]})


        }
        catch (e) {
            return message.channel.send(`there was an error:\n${e.message}`)
        }

    }
}