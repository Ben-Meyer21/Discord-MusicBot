const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const mySecret = process.env['Token']

client.build();

module.exports = client; //;-;
