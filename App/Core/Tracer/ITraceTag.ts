interface ITraceTag {
  Name: string;
  Value: any;
}

const ITraceTag = Symbol.for('ITraceTag');

export { ITraceTag };
