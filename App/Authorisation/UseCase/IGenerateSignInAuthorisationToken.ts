import { IGenerateSignInAuthorisationTokenCommand } from '../Type/Command/UseCase/IGenerateSignInAuthorisationTokenCommand';
import { AuthorisationToken } from '../Type/Dto/AuthorisationToken';

interface IGenerateSignInAuthorisationToken {
  execute(command: IGenerateSignInAuthorisationTokenCommand): Promise<AuthorisationToken>;
}

const IGenerateSignInAuthorisationToken = Symbol.for('IGenerateSignInAuthorisationToken');

export { IGenerateSignInAuthorisationToken };
