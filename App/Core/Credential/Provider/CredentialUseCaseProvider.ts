import { IContainerService } from '../../Container/IContainerService';
import { IProvider } from '../../Provider/IProvider';
import { IHashDriver } from '../Driver/IHashDriver';
import { GenerateNewUserCredential } from '../UseCase/GenerateNewUserCredential';
import { GenerateUserCredentialFromExistingSalt } from '../UseCase/GenerateUserCredentialFromExistingSalt';
import { IGenerateNewUserCredential } from '../UseCase/IGenerateNewUserCredential';
import { IGenerateUserCredentialFromExistingSalt } from '../UseCase/IGenerateUserCredentialFromExistingSalt';

class CredentialUseCaseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerGenerateUserCredentialFromExistingSalt();
    await this.registerGenerateNewUserCredential();
  }

  private async registerGenerateUserCredentialFromExistingSalt(): Promise<void> {
    const promisedUseCase = new Promise<IGenerateUserCredentialFromExistingSalt>(async resolve => {
      const hashDriver = await this.container.get<IHashDriver>(IHashDriver);
      const useCase = new GenerateUserCredentialFromExistingSalt(hashDriver);

      resolve(useCase);
    });

    await this.container.register<IGenerateNewUserCredential>(
      IGenerateNewUserCredential,
      promisedUseCase
    );
  }

  private async registerGenerateNewUserCredential(): Promise<void> {
    const promisedUseCase = new Promise<IGenerateNewUserCredential>(async resolve => {
      const hashDriver = await this.container.get<IHashDriver>(IHashDriver);
      const useCase = new GenerateNewUserCredential(hashDriver);

      resolve(useCase);
    });

    await this.container.register<IGenerateNewUserCredential>(
      IGenerateNewUserCredential,
      promisedUseCase
    );
  }
}

export { CredentialUseCaseProvider };
