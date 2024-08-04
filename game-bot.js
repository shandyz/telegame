import { Telegraf, Markup } from "telegraf";

const gameShortName = "Test-game";
const gameUrl = "https://localhost:8000/index.html";
const token = "7256776299:AAGe7PdZU9CeAN4TpXkkMP7lrDFZQWtLdQ0";

const markup = Markup.inlineKeyboard([
	Markup.button.game("🎮 Play now!"),
	Markup.button.url("Telegraf help", "http://telegraf.js.org"),
]);

const bot = new Telegraf(token);
bot.start(ctx => ctx.replyWithGame(gameShortName));
bot.command("foo", ctx => ctx.replyWithGame(gameShortName, markup));
bot.gameQuery(ctx => ctx.answerGameQuery(gameUrl));

bot.launch();