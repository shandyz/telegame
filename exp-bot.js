import express from "express";
import { Telegraf } from "telegraf";

const token = "7256776299:AAGe7PdZU9CeAN4TpXkkMP7lrDFZQWtLdQ0";

const port  = 9000;
const bot = new Telegraf(token);
const app = express();

// Set the bot API endpoint
app.use(await bot.createWebhook({ domain: "localhost" }));

bot.on("text", ctx => ctx.reply("Hello"));

app.listen(port, () => console.log("Listening on port", port));