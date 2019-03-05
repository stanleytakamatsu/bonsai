import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { HealthController } from '../Controller/HealthController';
import { IHealthController } from '../Controller/IHealthController';
import { HealthStatusFactory } from '../Factory/HealthStatusFactory';
import { IHealthStatusFactory } from '../Factory/IHealthStatusFactory';

class HealthProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerFactory();
    await this.registerController();
  }

  private async registerController(): Promise<void> {
    const promisedController = new Promise<IHealthController>(async resolve => {
      const factory = await this.container.get<IHealthStatusFactory>(IHealthStatusFactory);
      const controller = new HealthController(factory);

      resolve(controller);
    });

    await this.container.register<IHealthController>(IHealthController, promisedController);
  }

  private async registerFactory(): Promise<void> {
    const promisedFactory = new Promise<IHealthStatusFactory>(async resolve => {
      const config = await this.container.get<IApplicationConfiguration>(IApplicationConfiguration);
      const factory = new HealthStatusFactory(config);

      resolve(factory);
    });

    await this.container.register<IHealthStatusFactory>(IHealthStatusFactory, promisedFactory);
  }
}

export { HealthProvider };
