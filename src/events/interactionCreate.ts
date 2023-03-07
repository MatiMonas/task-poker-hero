import { Event } from '../structures/Event';
import { client } from '../index';
import { CommandInteractionOptionResolver } from 'discord.js';
import { ExtendedInteraction } from '../typings/Command';

export default new Event('interactionCreate', async (interaction) => {
  try {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        return interaction.reply('Please, enter a valid command.');
      }

      command.execute({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendedInteraction,
      });
    }

    if (interaction.isButton()) {
    }
  } catch (err) {
    console.log(err);
  }
});
