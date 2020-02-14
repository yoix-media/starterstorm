import { Client } from 'discord.js'

exports.handler = async function(event, context, callback) {
  const bot = new Client()
  await bot.login(process.env.GATSBY_BOT_TOKEN)

  const memberCount = bot.guilds.get(process.env.GATSBY_GUILD_ID).memberCount

  callback(null, {
    statusCode: 200,
    headers: {
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({ memberCount }),
  })
}
