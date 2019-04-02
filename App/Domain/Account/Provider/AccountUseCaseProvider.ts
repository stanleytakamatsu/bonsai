import { IContainerService } from '../../../Core/Container/IContainerService';
import { IGenerateNewUserCredential } from '../../../Core/Credential/UseCase/IGenerateNewUserCredential';
import { IGenerateUserCredentialFromExistingSalt } from '../../../Core/Credential/UseCase/IGenerateUserCredentialFromExistingSalt';
import { ILogger } from '../../../Core/Logger/ILogger';
import { IProvider } from '../../../Core/Provider/IProvider';
import { IGenerateSignInAuthorisationToken } from '../../Authorisation/UseCase/IGenerateSignInAuthorisationToken';
import { IAccountCreatorService } from '../Service/IAccountCreatorService';
import { IAccountFinderService } from '../Service/IAccountFinderService';
import { IUserSignIn } from '../UseCase/IUserSignIn';
import { IUserSignUp } from '../UseCase/IUserSignUp';
import { UserSignIn } from '../UseCase/UserSignIn';
import { UserSignUp } from '../UseCase/UserSignUp';

class AccountUseCaseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUp();
    await this.registerSignIn();
  }

  private async registerSignUp(): Promise<void> {
    const promisedUseCase = new Promise<IUserSignUp>(async resolve => {
      const service = await this.container.get<IAccountCreatorService>(IAccountCreatorService);
      const credentalGenerator = await this.container.get<IGenerateNewUserCredential>(
        IGenerateNewUserCredential
      );
      const logger = await this.container.get<ILogger>(ILogger);
      const useCase = new UserSignUp(service, credentalGenerator, logger);

      resolve(useCase);
    });

    await this.container.register<IUserSignUp>(IUserSignUp, promisedUseCase);
  }

  private async registerSignIn(): Promise<void> {
    const promisedUseCase = new Promise<IUserSignIn>(async resolve => {
      const service = await this.container.get<IAccountFinderService>(IAccountFinderService);
      const credentalGenerator = await this.container.get<IGenerateUserCredentialFromExistingSalt>(
        IGenerateUserCredentialFromExistingSalt
      );
      const tokenGenerator = await this.container.get<IGenerateSignInAuthorisationToken>(
        IGenerateSignInAuthorisationToken
      );
      const logger = await this.container.get<ILogger>(ILogger);
      const useCase = new UserSignIn(service, credentalGenerator, tokenGenerator, logger);

      resolve(useCase);
    });

    await this.container.register<IUserSignIn>(IUserSignIn, promisedUseCase);
  }
}

export { AccountUseCaseProvider };
