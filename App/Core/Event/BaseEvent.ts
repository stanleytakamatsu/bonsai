import { IEvent } from './IEvent';

abstract class BaseEvent<T> implements IEvent {
  public constructor(private readonly data: T) {}

  public get Name(): string {
    return this.constructor.name;
  }

  public get Data(): T {
    return this.data;
  }
}

export { BaseEvent };
