import { IUserSignInCommand } from '../Tyoe/Command/UseCase/IUserSignInCommand';
import { AccountAuthorisation } from '../Tyoe/Dto/AccountAuthorisation';

interface IUserSignIn {
  execute(command: IUserSignInCommand): Promise<AccountAuthorisation>;
}

const IUserSignIn = Symbol.for('IUserSignIn');

export { IUserSignIn };
