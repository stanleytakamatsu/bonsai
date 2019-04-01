import { IVerifyAuthorisationTokenCommand } from '../Type/Command/UseCase/IVerifyAuthorisationTokenCommand';

interface IVerifyAuthorisationToken {
  execute(command: IVerifyAuthorisationTokenCommand): Promise<void>;
}

const IVerifyAuthorisationToken = Symbol.for('IVerifyAuthorisationToken');

export { IVerifyAuthorisationToken };
