import { Context } from 'telegraf';

export const myMoodCommand = (ctx: Context) => {
    ctx.reply('Какое настроение сейчас?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '😊 Good', callback_data: 'mood_good' }],
                [{ text: '😢 Sad', callback_data: 'mood_sad' }]
            ]
        }
    });
};
