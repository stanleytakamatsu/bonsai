import { ITracerDriver } from './Driver/ITracerDriver';
import { ITraceScope } from './Driver/ITraceScope';
import { ITraceSpan } from './Driver/ITraceSpan';
import { ITracer } from './ITracer';

class Tracer implements ITracer {
  public constructor(private readonly tracer: ITracerDriver) {}

  public error(error: Error): void {
    this.traceError(error, 'error');
  }

  public warning(error: Error): void {
    this.traceError(error, 'warning');
  }

  public startSpan(name: string): ITraceSpan {
    return this.tracer.startSpan(name);
  }

  public createScope(name: string): ITraceScope {
    return this.tracer.createScope(name);
  }

  public getActiveScope(): ITraceScope {
    return this.tracer.getActiveScope();
  }

  public createChildSpanFromActiveScope(name: string): ITraceSpan {
    const scope = this.getActiveScope();

    if (scope === undefined) {
      return this.startSpan(name);
    }

    const activeSpan = scope.getSpan();

    return activeSpan.createChildSpan(name);
  }

  private traceError(error: Error, level: string): void {
    const span = this.tracer.startSpan(`error_tracker.${level}`);

    span.addTags({
      'error.msg': error.message,
      'error.stack': error.stack,
      'error.type': error.name
    });

    span.finish();
  }
}

export { Tracer };
