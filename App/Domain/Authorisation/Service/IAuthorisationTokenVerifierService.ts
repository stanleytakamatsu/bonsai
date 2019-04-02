import { TokenVerifyCommand } from '../Type/Command/Service/TokenVerifyCommand';

interface IAuthorisationTokenVerifierService {
  verify(command: TokenVerifyCommand): Promise<void>;
}

const IAuthorisationTokenVerifierService = Symbol.for('IAuthorisationTokenVerifierService');

export { IAuthorisationTokenVerifierService };
