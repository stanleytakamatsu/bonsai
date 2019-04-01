import { TokenGenerationError } from '../../Core/Token/Error/TokenGenerationError';
import { ITokenAdapter } from '../../Core/Token/ITokenAdapter';
import { GenerateTokenCommand } from '../../Core/Token/Type/Command/GenerateTokenCommand';
import { IGenerateTokenCommand } from '../../Core/Token/Type/Command/IGenerateTokenCommand';
import { AuthorisationToken } from '../Type/Dto/AuthorisationToken';
import { AuthorisationTokenCreationError } from '../Type/Error/Service/AuthorisationTokenCreationError';

import { IAuthorisationTokenGeneratorService } from './IAuthorisationTokenGeneratorService';

class AuthorisationTokenGeneratorService implements IAuthorisationTokenGeneratorService {
  public constructor(private readonly tokenAdapter: ITokenAdapter) {}

  public async generate(command: IGenerateTokenCommand): Promise<AuthorisationToken> {
    try {
      const generateCommand = GenerateTokenCommand.create(command.Payload);
      const token = await this.tokenAdapter.generate(generateCommand);

      return AuthorisationToken.create(token.Value, command.Payload.exp);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    let originalError = error;

    if (error instanceof TokenGenerationError) {
      const generationError = error as TokenGenerationError;

      originalError = generationError.OriginalError;
    }

    throw new AuthorisationTokenCreationError(error.message, originalError);
  }
}

export { AuthorisationTokenGeneratorService };
