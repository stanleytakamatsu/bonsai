import { IApplicationConfiguration } from '../../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Container/IContainerService';
import { IProvider } from '../../Provider/IProvider';
import { StrategyFactory } from '../Factory/StrategyFactory';
import { ITracer } from '../ITracer';

class TracerProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerTracerFactory();
  }

  private async registerTracerFactory(): Promise<void> {
    const promisedTracer = new Promise<ITracer>(async resolve => {
      const configuration = await this.container.get<IApplicationConfiguration>(
        IApplicationConfiguration
      );
      const tracer = await StrategyFactory.create(configuration);

      resolve(tracer);
    });

    await this.container.register<ITracer>(ITracer, promisedTracer);
  }
}

export { TracerProvider };
