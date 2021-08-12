const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Displays a message embed',
    execute(message) {
       
        const Embed = new MessageEmbed()
            .setTitle('Echo')
            .setDescription('this bot is made by echo with love')
            
            .addField('Hello', 'nice')
            .setFooter('#footer')
            .setTimestamp()
            .setColor('#4287f5')
        message.channel.send({embeds: [Embed]});
    
    }
}
    

