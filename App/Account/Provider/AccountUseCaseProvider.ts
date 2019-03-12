import { IContainerService } from '../../Core/Container/IContainerService';
import { IGenerateNewUserCredential } from '../../Core/Credential/UseCase/IGenerateNewUserCredential';
import { ILogger } from '../../Core/Logger/ILogger';
import { IProvider } from '../../Core/Provider/IProvider';
import { IAccountCreatorService } from '../Service/IAccountCreatorService';
import { IUserSignUp } from '../UseCase/IUserSignUp';
import { UserSignUp } from '../UseCase/UserSignUp';

class AccountUseCaseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUp();
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
}

export { AccountUseCaseProvider };
