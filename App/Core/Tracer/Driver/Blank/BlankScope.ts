import { ITraceScope } from '../ITraceScope';
import { ITraceSpan } from '../ITraceSpan';

import { BlankSpan } from './BlankSpan';

class BlankScope implements ITraceScope {
  public getSpan(): ITraceSpan {
    return new BlankSpan();
  }

  // tslint:disable-next-line:no-empty
  public close(): void {}
}

export { BlankScope };
