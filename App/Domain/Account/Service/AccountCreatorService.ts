import { ConflictRecordError } from '../../../Core/Error/Repository/ConflictRecordError';
import { SaveRecordError } from '../../../Core/Error/Repository/SaveRecordError';
import { GenericError } from '../../../Core/Error/Service/GenericError';
import { IAccountRepository } from '../Repository/IAccountRepository';
import { CreateAccountCommand } from '../Tyoe/Command/Repository/CreateAccountCommand';
import { ICreateAccountCommand } from '../Tyoe/Command/Service/ICreateAccountCommand';
import { AlreadyAccountExists } from '../Tyoe/Error/Service/AlreadyAccountExists';

import { IAccountCreatorService } from './IAccountCreatorService';

class AccountCreatorService implements IAccountCreatorService {
  public constructor(private readonly repository: IAccountRepository) {}

  public async create(command: ICreateAccountCommand): Promise<void> {
    try {
      const repositoryCommand = CreateAccountCommand.create(command.Account);

      await this.repository.create(repositoryCommand);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    switch (error.constructor) {
      case SaveRecordError:
        const saveRecordError = error as SaveRecordError;

        throw new GenericError(error.message, saveRecordError.OriginalError);
      case ConflictRecordError:
        throw new AlreadyAccountExists(error.message);
      default:
        throw new GenericError(error.message, error);
    }
  }
}

export { AccountCreatorService };
