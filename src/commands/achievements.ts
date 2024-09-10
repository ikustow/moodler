import { Context } from 'telegraf';

export const achievementsCommand = (ctx: Context) => {
    ctx.reply('Откройте мини-приложение, чтобы проверить свои достижения:', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Проверить достижения',
                    web_app: { url: 'https://tma-next-js.vercel.app' }
                }]
            ]
        }
    });
};
