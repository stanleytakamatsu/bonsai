import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { TokenAdapterFactory } from '../../Core/Token/TokenAdapterFactory';
import { AuthorisationTokenVerifierService } from '../Service/AuthorisationTokenVerifierService';
import { IAuthorisationTokenVerifierService } from '../Service/IAuthorisationTokenVerifierService';

class AuthorisationServiceProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerTokenVerifierService();
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
}

export { AuthorisationServiceProvider };
