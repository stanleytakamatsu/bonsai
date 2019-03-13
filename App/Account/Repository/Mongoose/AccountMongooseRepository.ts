import { IMongooseConnection } from '../../../Core/Database/Driver/Mongoose/Connection/IMongooseConnection';
import { MongooseRepository } from '../../../Core/Database/Driver/Mongoose/Repository/MongooseRepository';
import { ConflictRecordError } from '../../../Core/Error/Repository/ConflictRecordError';
import { SaveRecordError } from '../../../Core/Error/Repository/SaveRecordError';
import { ICreateAccountCommand } from '../../Tyoe/Command/Repository/ICreateAccountCommand';
import { IAccountRepository } from '../IAccountRepository';

import { IAccountMongooseModel } from './Model/IAccountMongooseModel';
import { AccountSchema } from './Schema/AccountSchema';

class AccountMongooseRepository extends MongooseRepository<IAccountMongooseModel>
  implements IAccountRepository {
  private static readonly COLLECTION_NAME = 'Account';

  public constructor(connection: IMongooseConnection) {
    super(connection, AccountMongooseRepository.COLLECTION_NAME, AccountSchema);
  }

  public async create(command: ICreateAccountCommand): Promise<void> {
    try {
      const account: Partial<IAccountMongooseModel> = {
        createdAt: command.Account.CreatedAt.toDate(),
        email: command.Account.Email,
        guid: command.Account.Guid,
        password: command.Account.Password,
        salt: command.Account.Salt,
        updatedAt: command.Account.UpdatedAt.toDate()
      };

      await this.documentModel.create(account);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  protected throwSpecificErrorBasedOn(error: any): void {
    switch (String(error.code)) {
      case AccountMongooseRepository.ERROR_CODE_DUPLICATED:
        throw new ConflictRecordError(error.message);
      default:
        throw new SaveRecordError(error.message, error);
    }
  }
}

export { AccountMongooseRepository };
