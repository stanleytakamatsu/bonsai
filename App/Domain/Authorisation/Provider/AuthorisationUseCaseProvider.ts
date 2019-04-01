import { IContainerService } from '../../../Core/Container/IContainerService';
import { ILogger } from '../../../Core/Logger/ILogger';
import { IProvider } from '../../../Core/Provider/IProvider';
import { IAuthorisationTokenGeneratorService } from '../Service/IAuthorisationTokenGeneratorService';
import { IAuthorisationTokenVerifierService } from '../Service/IAuthorisationTokenVerifierService';
import { GenerateSignInAuthorisationToken } from '../UseCase/GenerateSignInAuthorisationToken';
import { IGenerateSignInAuthorisationToken } from '../UseCase/IGenerateSignInAuthorisationToken';
import { IVerifyAuthorisationToken } from '../UseCase/IVerifyAuthorisationToken';
import { VerifyAuthorisationToken } from '../UseCase/VerifyAuthorisationToken';

class AuthorisationUseCaseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerAuthorisationTokenVerifyUseCase();
    await this.registerGenerateSignInAuthorisationToken();
  }

  private async registerAuthorisationTokenVerifyUseCase(): Promise<void> {
    const promisedUseCase = new Promise<IVerifyAuthorisationToken>(async resolve => {
      const logger = await this.container.get<ILogger>(ILogger);

      const verifierService = await this.container.get<IAuthorisationTokenVerifierService>(
        IAuthorisationTokenVerifierService
      );

      const useCase = new VerifyAuthorisationToken(verifierService, logger);

      resolve(useCase);
    });

    await this.container.register<IVerifyAuthorisationToken>(
      IVerifyAuthorisationToken,
      promisedUseCase
    );
  }

  private async registerGenerateSignInAuthorisationToken(): Promise<void> {
    const promisedUseCase = new Promise<IGenerateSignInAuthorisationToken>(async resolve => {
      const logger = await this.container.get<ILogger>(ILogger);

      const generatorService = await this.container.get<IAuthorisationTokenGeneratorService>(
        IAuthorisationTokenGeneratorService
      );

      const useCase = new GenerateSignInAuthorisationToken(generatorService, logger);

      resolve(useCase);
    });

    await this.container.register<IGenerateSignInAuthorisationToken>(
      IGenerateSignInAuthorisationToken,
      promisedUseCase
    );
  }
}

export { AuthorisationUseCaseProvider };
