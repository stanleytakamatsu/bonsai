import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { ITracer } from '../Tracer/ITracer';

import { IWinstonConfiguration } from './Driver/Winston/IWinstonConfiguration';
import { Winston } from './Driver/Winston/Winston';
import { Drivers } from './Drivers';
import { ILogger } from './ILogger';
import { Logger } from './Logger';

class StartegyFactory {
  public static async createLogger(
    configuration: IApplicationConfiguration,
    tracer: ITracer
  ): Promise<ILogger> {
    const queue_driver = configuration.loggerDriver();

    switch (queue_driver) {
      case Drivers.WINSTON:
        return StartegyFactory.createWinstonLogger(configuration, tracer);
      default:
        return StartegyFactory.createWinstonLogger(configuration, tracer);
    }
  }

  private static createWinstonLogger(
    configuration: IApplicationConfiguration,
    tracer: ITracer
  ): ILogger {
    const winstonConfig: IWinstonConfiguration = configuration.winstonLogger();

    return new Logger(new Winston(winstonConfig), tracer);
  }
}

export { StartegyFactory };
