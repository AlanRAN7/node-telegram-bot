const {Telegraf} = require("telegraf");
const bot = new Telegraf("5419648715:AAHCHYWjOxSdrFzHbDcL87pcEINAvGV8QPA")
// ctx = context: Se usará el chat como "contexto"
bot.start((ctx)=>{
    console.log(ctx)
    ctx.reply("Bienvenidos al Bot de Zavniex!");
})

bot.help((ctx) => {
    ctx.reply("Bienvenido a la sección de ayuda:");
})

bot.settings((ctx) => {
    ctx.reply("Bienvendio a la sección de configuración:");
})

bot.command(["cmdtest", "CmdTest", "CMDTEST", "cmdTest"], (ctx) => {
    ctx.reply("Este es un test del comando nuevo!")
})

bot.hears("perro", (ctx) => {
    ctx.reply("Mi perrito se llama Bender")
})

bot.on("text", (ctx)=>{
    ctx.reply("Estás texteando")
})

bot.on("sticker", (ctx) =>{
    ctx.reply("Oh, you like stickers!")
})
bot.launch();