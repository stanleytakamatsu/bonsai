import { IEvent } from './IEvent';

interface IEventListener {
  listener(event?: IEvent): Promise<void>;
}

const IEventListener = Symbol.for('IEventListener');

export { IEventListener };
