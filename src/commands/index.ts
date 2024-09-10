import { Telegraf } from 'telegraf';
import { startCommand } from './start';
import { helpCommand } from './help';
import { achievementsCommand } from './achievements';
import { myMoodCommand } from './myMood';

export const setupCommands = (bot: Telegraf) => {
    bot.telegram.setMyCommands([
        { command: 'start', description: 'Запустить бота' },
        { command: 'help', description: 'Получить помощь' },
        { command: 'achievements', description: 'Проверить достижения' },
        { command: 'mymood', description: 'Какое ваше настроение сейчас?' }
    ]);

    bot.command('start', startCommand);
    bot.command('help', helpCommand);
    bot.command('achievements', achievementsCommand);
    bot.command('mymood', myMoodCommand);
};
