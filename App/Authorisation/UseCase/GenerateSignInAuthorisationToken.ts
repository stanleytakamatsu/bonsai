import { ILogger } from '../../Core/Logger/ILogger';
import { IAuthorisationTokenGeneratorService } from '../Service/IAuthorisationTokenGeneratorService';
import { GenerateTokenCommand } from '../Type/Command/Service/GenerateTokenCommand';
import { IGenerateSignInAuthorisationTokenCommand } from '../Type/Command/UseCase/IGenerateSignInAuthorisationTokenCommand';
import { AuthorisationToken } from '../Type/Dto/AuthorisationToken';
import { AuthorisationTokenCreationError } from '../Type/Error/Service/AuthorisationTokenCreationError';
import { TokenGenerationGenericError } from '../Type/Error/UseCase/TokenGenerationGenericError';

import { IGenerateSignInAuthorisationToken } from './IGenerateSignInAuthorisationToken';

class GenerateSignInAuthorisationToken implements IGenerateSignInAuthorisationToken {
  public constructor(
    private readonly tokenGenerator: IAuthorisationTokenGeneratorService,
    private readonly logger: ILogger
  ) {}

  public async execute(
    command: IGenerateSignInAuthorisationTokenCommand
  ): Promise<AuthorisationToken> {
    try {
      const generateCommand = GenerateTokenCommand.create(command.Payload);

      return await this.tokenGenerator.generate(generateCommand);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    switch (error.constructor) {
      case AuthorisationTokenCreationError:
        const tokenError = error as AuthorisationTokenCreationError;

        this.logger.warning(error.message, tokenError.OriginalError);

        throw new TokenGenerationGenericError();
      default:
        this.logger.error(error.message, error);

        throw new TokenGenerationGenericError();
    }
  }
}

export { GenerateSignInAuthorisationToken };
