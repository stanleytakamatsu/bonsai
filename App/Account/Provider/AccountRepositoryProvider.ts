import { IContainerService } from '../../Core/Container/IContainerService';
import { IMongooseConnection } from '../../Core/Database/Driver/Mongoose/Connection/IMongooseConnection';
import { IProvider } from '../../Core/Provider/IProvider';
import { IAccountRepository } from '../Repository/IAccountRepository';
import { AccountMongooseRepository } from '../Repository/Mongoose/AccountMongooseRepository';

class AccountRepositoryProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerAccountMongooseRepository();
  }

  private async registerAccountMongooseRepository(): Promise<void> {
    const promisedRepository = new Promise<IAccountRepository>(async resolve => {
      const connection = await this.container.get<IMongooseConnection>(IMongooseConnection);
      const repository = new AccountMongooseRepository(connection);

      resolve(repository);
    });

    await this.container.register<IAccountRepository>(IAccountRepository, promisedRepository);
  }
}

export { AccountRepositoryProvider };
