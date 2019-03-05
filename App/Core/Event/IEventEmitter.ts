import { IEvent } from './IEvent';
import { IEventListener } from './IEventListener';

interface IEventEmitter {
  subscribe(eventName: string, eventListener: IEventListener): () => void;
  send(event: IEvent): Promise<void>;
}

const IEventEmitter = Symbol.for('IEventEmitter');

export { IEventEmitter };
