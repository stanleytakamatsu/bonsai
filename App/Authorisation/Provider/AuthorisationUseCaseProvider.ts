import { IContainerService } from '../../Core/Container/IContainerService';
import { ILogger } from '../../Core/Logger/ILogger';
import { IProvider } from '../../Core/Provider/IProvider';
import { IAuthorisationTokenVerifierService } from '../Service/IAuthorisationTokenVerifierService';
import { IVerifyAuthorisationToken } from '../UseCase/IVerifyAuthorisationToken';
import { VerifyAuthorisationToken } from '../UseCase/VerifyAuthorisationToken';

class AuthorisationUseCaseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerAuthorisationTokenVerifyOperation();
  }

  private async registerAuthorisationTokenVerifyOperation(): Promise<void> {
    const promisedOperation = new Promise<IVerifyAuthorisationToken>(async resolve => {
      const logger = await this.container.get<ILogger>(ILogger);

      const verifierService = await this.container.get<IAuthorisationTokenVerifierService>(
        IAuthorisationTokenVerifierService
      );

      const operation = new VerifyAuthorisationToken(verifierService, logger);

      resolve(operation);
    });

    await this.container.register<IVerifyAuthorisationToken>(
      IVerifyAuthorisationToken,
      promisedOperation
    );
  }
}

export { AuthorisationUseCaseProvider };
