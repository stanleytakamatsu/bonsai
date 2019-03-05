import { ITracer } from '../Tracer/ITracer';

import { ILogger } from './ILogger';

class Logger implements ILogger {
  public constructor(private readonly logger: ILogger, private readonly tracer: ITracer) {}

  public debug(message: string, metadata?: any): void {
    this.logger.debug(message, metadata);
  }

  public info(message: string, metadata?: any): void {
    this.logger.info(message, metadata);
  }

  public warning(message: string, metadata?: any): void {
    this.logger.warning(message, metadata);
  }

  public error(message: string, metadata?: any): void {
    this.logger.error(message, metadata);

    if (metadata instanceof Error) {
      this.tracer.error(metadata);
    }
  }
}

export { Logger };
