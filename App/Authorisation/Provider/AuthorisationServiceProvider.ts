import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { TokenAdapterFactory } from '../../Core/Token/TokenAdapterFactory';
import { AuthorisationTokenGeneratorService } from '../Service/AuthorisationTokenGeneratorService';
import { AuthorisationTokenVerifierService } from '../Service/AuthorisationTokenVerifierService';
import { IAuthorisationTokenGeneratorService } from '../Service/IAuthorisationTokenGeneratorService';
import { IAuthorisationTokenVerifierService } from '../Service/IAuthorisationTokenVerifierService';

class AuthorisationServiceProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerTokenVerifierService();
    await this.registerAuthorisationTokenGeneratorService();
  }

  private async registerTokenVerifierService(): Promise<void> {
    const promisedService = new Promise<IAuthorisationTokenVerifierService>(async resolve => {
      const configuration = await this.container.get<IApplicationConfiguration>(
        IApplicationConfiguration
      );
      const tokenConfigurations = configuration.authorisationTokenConfigurations();

      const tokenAdapter = TokenAdapterFactory.build(tokenConfigurations);

      const service = new AuthorisationTokenVerifierService(tokenAdapter);

      resolve(service);
    });

    await this.container.register<IAuthorisationTokenVerifierService>(
      IAuthorisationTokenVerifierService,
      promisedService
    );
  }

  private async registerAuthorisationTokenGeneratorService(): Promise<void> {
    const promisedService = new Promise<IAuthorisationTokenGeneratorService>(async resolve => {
      const configuration = await this.container.get<IApplicationConfiguration>(
        IApplicationConfiguration
      );
      const tokenConfigurations = configuration.authorisationTokenConfigurations();

      const tokenAdapter = TokenAdapterFactory.build(tokenConfigurations);

      const service = new AuthorisationTokenGeneratorService(tokenAdapter);

      resolve(service);
    });

    await this.container.register<IAuthorisationTokenGeneratorService>(
      IAuthorisationTokenGeneratorService,
      promisedService
    );
  }
}

export { AuthorisationServiceProvider };
