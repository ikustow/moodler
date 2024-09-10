import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { setupCommands } from './commands/index';
import { handleCallbacks } from './handlers/callbackHandler';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

// Устанавливаем команды
setupCommands(bot);

// Обрабатываем callback запросы
handleCallbacks(bot);

// Запускаем бота
bot.launch().then(() => {
    console.log('Бот успешно запущен!');
});

// Завершение работы
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));