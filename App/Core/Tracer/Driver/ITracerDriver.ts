import { ITraceScope } from './ITraceScope';
import { ITraceSpan } from './ITraceSpan';

interface ITracerDriver {
  startSpan(name: string): ITraceSpan;
  createScope(name: string): ITraceScope;
  getActiveScope(): ITraceScope;
}

const ITracerDriver = Symbol.for('ITracerDriver');

export { ITracerDriver };
