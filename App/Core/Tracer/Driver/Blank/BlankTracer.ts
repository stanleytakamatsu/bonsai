import { ITracerDriver } from '../ITracerDriver';
import { ITraceScope } from '../ITraceScope';
import { ITraceSpan } from '../ITraceSpan';

import { BlankScope } from './BlankScope';
import { BlankSpan } from './BlankSpan';

class BlankTracer implements ITracerDriver {
  public startSpan(_name: string): ITraceSpan {
    return new BlankSpan();
  }

  public createScope(_name: string): ITraceScope {
    return new BlankScope();
  }

  public getActiveScope(): ITraceScope {
    return new BlankScope();
  }
}

export { BlankTracer };
