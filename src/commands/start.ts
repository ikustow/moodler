import { Context } from 'telegraf';

export const startCommand = (ctx: Context) => {
    ctx.reply('Привет! Я Telegram бот, созданный с использованием Telegraf.js и TypeScript.');
};
