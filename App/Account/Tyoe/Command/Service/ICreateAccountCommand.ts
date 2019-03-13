import { Account } from '../../../Entity/Account';

interface ICreateAccountCommand {
  Account: Account;
}

const ICreateAccountCommand = Symbol.for('ICreateAccountCommand');

export { ICreateAccountCommand };
