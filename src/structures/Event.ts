import { ClientEvents, RESTEvents } from 'discord.js';

// La key es el tipo de evento que se va a ejecutar
export class Event<Key extends keyof ClientEvents> {
  constructor(
    public event: Key,
    public execute: (...args: ClientEvents[Key]) => any,
  ) {}
}
