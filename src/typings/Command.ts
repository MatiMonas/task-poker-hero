import {
  GuildMember,
  CommandInteractionOptionResolver,
  CommandInteraction,
  PermissionResolvable,
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
} from 'discord.js';
import { ExtendedClient } from '../structures/Client';

export interface ExtendedInteraction extends ChatInputCommandInteraction {
  member: GuildMember;
}

interface ExecuteOptions {
  client: ExtendedClient;
  interaction: ExtendedInteraction;
  args: CommandInteractionOptionResolver;
}

type ExecuteFunction = (options: ExecuteOptions) => any;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  cooldown?: number;
  execute: ExecuteFunction  ;
} & ChatInputApplicationCommandData ; 
