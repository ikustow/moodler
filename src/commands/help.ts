import { Context } from 'telegraf';

export const helpCommand = (ctx: Context) => {
    ctx.reply('Это справочная информация. Вы можете использовать следующие команды:\n/start - запустить бота\n/achievements - проверить достижения\n/myMood - отправить своё настроение');
};
