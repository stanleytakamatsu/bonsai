import { ITraceSpan } from './ITraceSpan';

interface ITraceScope {
  getSpan(): ITraceSpan;
  close(): void;
}

export { ITraceScope };
