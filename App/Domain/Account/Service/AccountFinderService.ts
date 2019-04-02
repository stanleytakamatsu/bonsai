import { FindRecordError } from '../../../Core/Error/Repository/FindRecordError';
import { RecordNotFoundError } from '../../../Core/Error/Repository/RecordNotFoundError';
import { SaveRecordError } from '../../../Core/Error/Repository/SaveRecordError';
import { GenericError } from '../../../Core/Error/Service/GenericError';
import { Account } from '../Entity/Account';
import { IAccountRepository } from '../Repository/IAccountRepository';
import { AccountNotFoundError } from '../Tyoe/Error/Service/AccountNotFoundError';
import { FindAccountByEmailQuery } from '../Tyoe/Query/Repository/FindAccountByEmailQuery';
import { IFindAccountByEmailQuery } from '../Tyoe/Query/Service/IFindAccountByEmailQuery';

import { IAccountFinderService } from './IAccountFinderService';

class AccountFinderService implements IAccountFinderService {
  public constructor(private readonly repository: IAccountRepository) {}

  public async findByEmail(query: IFindAccountByEmailQuery): Promise<Account> {
    try {
      const repositoryQuery = FindAccountByEmailQuery.create(query.Email);

      return await this.repository.findByEmail(repositoryQuery);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    switch (error.constructor) {
      case FindRecordError:
        const findRecordError = error as SaveRecordError;

        throw new GenericError(error.message, findRecordError.OriginalError);
      case RecordNotFoundError:
        throw new AccountNotFoundError(error.message);
      default:
        throw new GenericError(error.message, error);
    }
  }
}

export { AccountFinderService };
