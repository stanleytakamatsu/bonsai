import { IGenerateTokenCommand } from '../../../Core/Token/Type/Command/IGenerateTokenCommand';
import { AuthorisationToken } from '../Type/Dto/AuthorisationToken';

interface IAuthorisationTokenGeneratorService {
  generate(command: IGenerateTokenCommand): Promise<AuthorisationToken>;
}

const IAuthorisationTokenGeneratorService = Symbol.for('IAuthorisationTokenGeneratorService');

export { IAuthorisationTokenGeneratorService };
