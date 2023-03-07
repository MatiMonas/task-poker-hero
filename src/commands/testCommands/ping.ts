import { Command } from '../../structures/Command';

export default new Command({
  name: 'ping',
  description: 'Replyes with Pong',
  execute: async ({ interaction }) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    interaction.followUp('pong');
  },
});
