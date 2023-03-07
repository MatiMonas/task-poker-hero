import { Command } from '../../structures/Command';
import { ApplicationCommandOptionType} from 'discord.js'


export default new Command({
  name: 'echo',
  description: 'echoes the message',
  options: [
    {
      name: 'message',
      description: 'message',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  execute: async ({ interaction }) => {
    const message = interaction.options.getString('message');
    await interaction.deferReply({ ephemeral: true });
    interaction.followUp(`Echoed message: ${message}`);
  },
});
