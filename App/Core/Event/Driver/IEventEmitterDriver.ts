interface IEventEmitterDriver {
  on(eventName: string, listener: (eventData?: any) => any): () => void;

  off(eventName: string, listener: (eventData?: any) => any): void;

  emit(eventName: string, eventData?: any): Promise<void>;

  clearListeners(eventName?: string): void;

  listenerCount(eventName?: string): number;
}

const IEventEmitterDriver = Symbol.for('IEventEmitterDriver');

export { IEventEmitterDriver };
