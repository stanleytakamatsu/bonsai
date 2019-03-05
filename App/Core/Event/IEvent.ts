interface IEvent {
  Data: any;
  Name: string;
}

const IEvent = Symbol.for('IEvent');

export { IEvent };
