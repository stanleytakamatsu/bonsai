interface ITraceSpan {
  setTag(name: string, value: any): void;
  addTags(tags: { [key: string]: string }): void;
  finish(): void;
  createChildSpan(name: string): ITraceSpan;
}

const ITraceSpan = Symbol.for('ITraceSpan');

export { ITraceSpan };
