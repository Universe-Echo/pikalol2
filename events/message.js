

const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);


module.exports = (client, message) => {
    const Prefix = 'p!';
    
   
    if (!message.content.startsWith(Prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
      client.commands.get('ping').execute(message);

    }

    else if (command === 'hi') {
      client.commands.get('hi').execute(message);
    }
    else if (command === 'embed') {
        client.commands.get('embed').execute(message); 
}
else if (command === 'help') {
    client.commands.get('help').execute(message); 
}
else if (command === 'poll') {
    message.react('👍')
    message.react('👎')
}
else if (command === 'puppy') {
    client.commands.get('puppy').execute(message); 
}
else if (command === 'happy') {
    client.commands.get('happy').execute(message); 
}
else if (command === 'sad') {
    client.commands.get('sad').execute(message);
}
else if (command === 'purge') {
    client.commands.get('purge').execute(client, message, args);
}
else if (command === 'aa') {
    client.commands.get('aa').execute(message);
}
else if (command === 'serverinfo') {
    client.commands.get('serverinfo').run(client, message, args);
}
else if (command === 'ban') {
    client.commands.get('ban').execute(client, message, args);
}
else if (command === 'kick') {
    client.commands.get('kick').execute(client, message, args);
}
else if (command === 'avatar') {
    client.commands.get('avatar').execute(client, message, args);
}
else if (command === 'tag') {
    client.commands.get('tag').execute(message);
   
} 
else if (command === 'mute') {
    client.commands.get('mute').run(client, message, args);
}
else if (command === 'tmute') {
    client.commands.get('tmute').run(client, message, args);
}
else if (command === 'unmute') {
    client.commands.get('unmute').run(client, message, args);
}
else if (command === 'unban') {
    client.commands.get('unban').execute(client, message, args);
}
}
