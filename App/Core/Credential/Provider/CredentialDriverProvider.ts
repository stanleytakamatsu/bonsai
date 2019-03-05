import { IApplicationConfiguration } from '../../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Container/IContainerService';
import { IProvider } from '../../Provider/IProvider';
import { DriverFactory } from '../Driver/DriverFactory';
import { IHashDriver } from '../Driver/IHashDriver';

class CredentialDriverProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerHashDriver();
  }

  private async registerHashDriver(): Promise<void> {
    const promisedHashDriver = new Promise<IHashDriver>(async resolve => {
      const configuration = await this.container.get<IApplicationConfiguration>(
        IApplicationConfiguration
      );
      const hashDriver = await DriverFactory.create(configuration);

      resolve(hashDriver);
    });

    await this.container.register<IHashDriver>(IHashDriver, promisedHashDriver);
  }
}

export { CredentialDriverProvider };
