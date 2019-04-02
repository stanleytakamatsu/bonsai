import { Account } from '../Entity/Account';
import { ICreateAccountCommand } from '../Tyoe/Command/Repository/ICreateAccountCommand';
import { IFindAccountByEmailQuery } from '../Tyoe/Query/Repository/IFindAccountByEmailQuery';

interface IAccountRepository {
  create(command: ICreateAccountCommand): Promise<void>;
  findByEmail(query: IFindAccountByEmailQuery): Promise<Account>;
}

const IAccountRepository = Symbol.for('IAccountRepository');

export { IAccountRepository };
