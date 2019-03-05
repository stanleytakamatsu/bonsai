import { IApplicationConfiguration } from '../../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Container/IContainerService';
import { IProvider } from '../../Provider/IProvider';
import { ITracer } from '../../Tracer/ITracer';
import { ILogger } from '../ILogger';
import { StartegyFactory } from '../StrategyFactory';

class LoggerProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerLogger();
  }

  private async registerLogger(): Promise<void> {
    const promisedLogger = new Promise<ILogger>(async resolve => {
      const configuration = await this.container.get<IApplicationConfiguration>(
        IApplicationConfiguration
      );
      const tracer = await this.container.get<ITracer>(ITracer);
      const logger = await StartegyFactory.createLogger(configuration, tracer);

      resolve(logger);
    });

    await this.container.register<ILogger>(ILogger, promisedLogger);
  }
}

export { LoggerProvider };
