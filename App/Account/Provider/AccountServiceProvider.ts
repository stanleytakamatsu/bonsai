import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { IAccountRepository } from '../Repository/IAccountRepository';
import { AccountCreatorService } from '../Service/AccountCreatorService';
import { IAccountCreatorService } from '../Service/IAccountCreatorService';

class AccountServiceProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerAccountCreatorService();
  }

  private async registerAccountCreatorService(): Promise<void> {
    const promisedService = new Promise<IAccountCreatorService>(async resolve => {
      const repository = await this.container.get<IAccountRepository>(IAccountRepository);
      const service = new AccountCreatorService(repository);

      resolve(service);
    });

    await this.container.register<IAccountCreatorService>(IAccountCreatorService, promisedService);
  }
}

export { AccountServiceProvider };
