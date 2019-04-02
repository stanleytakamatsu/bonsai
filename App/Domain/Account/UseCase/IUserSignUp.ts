import { IUserSignUpCommand } from '../Tyoe/Command/UseCase/IUserSignUpCommand';

interface IUserSignUp {
  execute(command: IUserSignUpCommand): Promise<void>;
}

const IUserSignUp = Symbol.for('IUserSignUp');

export { IUserSignUp };
