import { ITraceScope } from './Driver/ITraceScope';
import { ITraceSpan } from './Driver/ITraceSpan';

interface ITracer {
  error(error: Error): void;
  warning(error: Error): void;
  startSpan(name: string): ITraceSpan;
  createScope(name: string): ITraceScope;
  getActiveScope(): ITraceScope;
  createChildSpanFromActiveScope(name: string): ITraceSpan;
}

const ITracer = Symbol.for('ITracer');

export { ITracer };
