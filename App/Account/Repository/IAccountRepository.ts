import { ICreateAccountCommand } from '../Tyoe/Command/Repository/ICreateAccountCommand';

interface IAccountRepository {
  create(command: ICreateAccountCommand): Promise<void>;
}

const IAccountRepository = Symbol.for('IAccountRepository');

export { IAccountRepository };
