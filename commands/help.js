const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a message embed',
    execute(message) {
       
        const Embed = new MessageEmbed()
            .setTitle('Prefix = p!')
            .setDescription('list of commands :-')
            .addField('p!help', 'for help menu')
            .addField('p!hi', 'for reply hi')
            .addField('p!poll', 'for reaction poll')
            .addField('gif commands', 'p!happy, p!sad, p!aa')
            .addField('p!purge (amount)', 'Purges messages')
            .addField('p!kick', 'Kicks a member from the server')
            .addField('p!ban', 'Bans a member from the server')
            .addField('Mute Commands', 'p!mute, p!tmute (time), p!unmute')
            .addField('p!avatar', 'For enlarged avatars')
            .addField('p!tag', 'For official tag of **The Universe**')
            .setFooter('PikaLol')
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send({embeds: [Embed]});
    
    }
}
    
