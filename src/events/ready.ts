import { Event } from '../structures/Event';
import server from '../server/index';
import env from '../utils/env';

const { PORT } = env;

export default new Event('ready', () => {
  try {
    console.log('Bot is online and ready to use');
    server(Number(PORT) || 8080);
  } catch (error) {
    console.log(error);
  }
});
