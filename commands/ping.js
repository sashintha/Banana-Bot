module.exports ={

    name: 'gretting',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send("test test")
    }
}