const { MessageEmbed } = require("discord.js")
const util = require("util")
module.exports = {
    name: "eval",
    description: "Evaluate Bot's Code.",
    aliases: [],
    category: "owner",
    usage: `${process.env.prefix}${this.name}`,
    excute(message, args, cmd, client, Discord){
        const err1 = new MessageEmbed()
        .setColor("RED")
        .setDescription("You Don't Have Permissions to use this command!")
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))

        if(!message.author.id === "686709351121289226") return message.channel.send(err1)

        const err = new MessageEmbed()
        .setColor("RED")
        .setDescription(`You Need to Specify Something to Eval!`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        if(!args.length) return message.channel.send(err)
        

        try {

            const evaled = eval(args.join(" "))
            
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .addField("to Eval", `\`\`\`${args.join(" ")}\`\`\``, true)
            .addField("Evaled", `\`\`\`js\n${util.inspect(evaled, { depth: 0 })}\`\`\``, true)
            .addField("Type of", `\`\`\`${typeof(evaled)}\`\`\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))

            try {
            message.channel.send(embed)
            } catch(error1) {
                const err6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(error1)
                .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))

                message.channel.send(err6)
            }
        } catch(error){
            const embed = new MessageEmbed()
            .setColor("RED")
            .setDescription(error)
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))


            message.channel.send(embed)
        }
    }
}
