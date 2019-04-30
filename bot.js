const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("572327382829236226")
setInterval(function() {
channel.send(`بسم الله و استغفر الله العضيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);