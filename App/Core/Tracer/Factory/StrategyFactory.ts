import { IApplicationConfiguration } from '../../../../Config/IApplicationConfiguration';
import { BlankDriverFactory } from '../Driver/Blank/Factory/BlankDriverFactory';
import { ITracerDriver } from '../Driver/ITracerDriver';
import { ITracer } from '../ITracer';
import { Strategies } from '../Strategies';
import { Tracer } from '../Tracer';

class StrategyFactory {
  public static async create(configuration: IApplicationConfiguration): Promise<ITracer> {
    let driver: ITracerDriver;

    switch (configuration.tracerDriver()) {
      case Strategies.BLANK:
        driver = await BlankDriverFactory.create();

        return new Tracer(driver);
      default:
        driver = await BlankDriverFactory.create();

        return new Tracer(driver);
    }
  }
}

export { StrategyFactory };
