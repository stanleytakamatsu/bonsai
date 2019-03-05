import * as EventEmmiter from 'emittery';

import { IEventEmitterDriver } from '../IEventEmitterDriver';

class Emittery implements IEventEmitterDriver {
  private readonly emmiter: EventEmmiter;

  public constructor() {
    this.emmiter = new EventEmmiter();
  }

  public off(eventName: string, listener: (eventData?: any) => any): void {
    this.emmiter.off(eventName, listener);
  }

  public on(eventName: string, listener: (eventData?: any) => any): () => void {
    return this.emmiter.on(eventName, listener);
  }

  public async emit(eventName: string, eventData?: any): Promise<void> {
    return this.emmiter.emit(eventName, eventData);
  }

  public clearListeners(eventName?: string): void {
    this.emmiter.clearListeners(eventName);
  }

  public listenerCount(eventName?: string): number {
    return this.emmiter.listenerCount(eventName);
  }
}

export { Emittery };
