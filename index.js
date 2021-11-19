const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login('token');


const fs = require('fs');
const message = require('./events/message');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const EventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'));
const fetch = require('node-fetch');
client.slashCommands = new Discord.Collection();

//https://discord.com/oauth2/authorize?client_id=873147009580826624&permissions=8&scope=bot%20applications.commandst

for (const EventFile of EventFiles) {
    const event = require('./events/' + EventFile);
    const EventName = EventFile.split('.')[0];
    client.on(EventName, event.bind(null, client));
}
const Files = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'));
for (const File of Files) {
    const command = require('./commands/' + File);
    client.commands.set(command.name, command);
    
    
    
    
}
{

  


}

