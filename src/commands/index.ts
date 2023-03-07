import { ApplicationCommandDataResolvable } from 'discord.js';
import testCommands from './testCommands';

const commands: ApplicationCommandDataResolvable[] = []
  .concat(testCommands)


export default commands;
