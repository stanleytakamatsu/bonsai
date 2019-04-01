import { Account } from '../Entity/Account';
import { IFindAccountByEmailQuery } from '../Tyoe/Query/Service/IFindAccountByEmailQuery';

interface IAccountFinderService {
  findByEmail(query: IFindAccountByEmailQuery): Promise<Account>;
}

const IAccountFinderService = Symbol.for('IAccountFinderService');

export { IAccountFinderService };
