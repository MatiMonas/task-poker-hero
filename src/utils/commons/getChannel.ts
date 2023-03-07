import { ExtendedInteraction } from '../../typings/Command';
import { GuildMember } from 'discord.js';

export default function getChannel(
  channelName: string,
  interaction: ExtendedInteraction | GuildMember,
) {
  return interaction.guild.channels.cache.find(
    (channel: { name: string }) => channel.name === channelName,
  );
}
