import { Client, Collection } from 'discord.js';
import { CommandType } from '../typings/Command';
import botCommands from '../commands';
import events from '../events';
import env from '../utils/env';


const { NODE_ENV, DISCORD_BOT_TOKEN, DISCORD_GUILD_TESTING_ID } = env;
export class ExtendedClient extends Client {
  commands: Collection<string, CommandType> = new Collection();

  constructor() {
    super({ intents: 65535 }); // le pasamos todos los intents
  }

  async start() {
    // Aca vamos a registrar los comandos
    this.on('ready',  () => {
      botCommands.forEach((command: CommandType) => {
        this.commands.set(command.name, command);
      });
      

      if (NODE_ENV === 'development' && DISCORD_GUILD_TESTING_ID) {
        this.guilds.cache
        .get(DISCORD_GUILD_TESTING_ID)
        ?.commands.set(botCommands)
        .then(() => console.log(`Guild commands registered`))
        .catch((err) => console.error(err));
      } else {
        console.log(`Registering global commands`);
        this.application?.commands
          .set(botCommands)
          .then(() => console.log(`Global commands registered`))
          .catch((err) => console.error(err));
      }
    });

    // Event handlers
    events.forEach(async (event) => {
      this.on(event.event, event.execute); 
    });

    this.destroy();
    await this.login(DISCORD_BOT_TOKEN);
  }

  getGuildIds() {
    return this.guilds.cache.map((guild) => guild.id);
  }

}
