import { Telegraf } from 'telegraf';
import axios from 'axios';

export const handleCallbacks = (bot: Telegraf) => {
    bot.on('callback_query', async (ctx) => {
        const callbackQuery = ctx.callbackQuery;

        if ('data' in callbackQuery) {
            const userId = ctx.from?.id;
            let mood: string | undefined; // Инициализируем mood как undefined

            // Присваиваем значение mood на основе данных из callback
            if (callbackQuery.data === 'mood_good') {
                mood = 'good';
            } else if (callbackQuery.data === 'mood_sad') {
                mood = 'sad';
            }

            // Проверяем, что mood имеет значение перед отправкой запроса
            if (mood) {
                try {
                    const response = await axios.post('https://your-backend-api.com/mood', {
                        userId: userId,
                        mood: mood
                    });

                    if (response.status === 200) {
                        ctx.reply(`Ваше настроение (${mood === 'good' ? '😊' : '😢'}) успешно зафиксировано!`);
                    }
                } catch (error) {
                    ctx.reply('Произошла ошибка при отправке настроения. Пожалуйста, попробуйте позже.');
                }
            } else {
                ctx.reply('Не удалось определить ваше настроение.');
            }

            ctx.answerCbQuery();
        }
    });
};
