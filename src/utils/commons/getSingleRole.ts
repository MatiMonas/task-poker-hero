import { ExtendedInteraction } from '../../typings/Command';
import { ButtonInteraction, GuildMember } from 'discord.js';

export default function getSingleRole(
  singleRole: string,
  interaction: ExtendedInteraction | GuildMember | ButtonInteraction,
) {
  return interaction.guild.roles.cache.find(
    (role: { name: string }) => role.name === singleRole,
  );
}
