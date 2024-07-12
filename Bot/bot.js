const { Telegraf } = require('telegraf')

const BOT_TOKEN = '';
const bot = new Telegraf(BOT_TOKEN)
const web_link = 'http://localhost:3000/'

bot.start((ctx) =>
    ctx.reply('Welcome', {
        reply_markup:{
            keyboard: [[{
                text: 'web app', 
                web_app: {url: web_link}
            }]]}
        }
    )
)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))