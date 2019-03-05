import { Emittery } from './Driver/Emittery/Emittery';
import { IEventEmitterDriver } from './Driver/IEventEmitterDriver';
import { IEvent } from './IEvent';
import { IEventEmitter } from './IEventEmitter';
import { IEventListener } from './IEventListener';

abstract class BaseEventEmitter implements IEventEmitter {
  private readonly emitter: IEventEmitterDriver;

  public constructor() {
    this.emitter = new Emittery();
  }

  public subscribe(eventName: string, eventListener: IEventListener): () => void {
    return this.emitter.on(eventName, async event => eventListener.listener(event));
  }

  public async send(event: IEvent): Promise<void> {
    return this.emitter.emit(event.Name, event);
  }
}

export { BaseEventEmitter };
