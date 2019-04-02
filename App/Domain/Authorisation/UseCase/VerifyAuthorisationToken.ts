import { ILogger } from '../../../Core/Logger/ILogger';
import { IAuthorisationTokenVerifierService } from '../Service/IAuthorisationTokenVerifierService';
import { TokenVerifyCommand } from '../Type/Command/Service/TokenVerifyCommand';
import { IVerifyAuthorisationTokenCommand } from '../Type/Command/UseCase/IVerifyAuthorisationTokenCommand';
import { InvalidAuthorisationTokenError } from '../Type/Error/Service/InvalidAuthorisationTokenError';
import { TokenAuthorisationGenericError } from '../Type/Error/UseCase/TokenAuthorisationGenericError';
import { TokenUnauthorisedError } from '../Type/Error/UseCase/TokenUnauthorisedError';

import { IVerifyAuthorisationToken } from './IVerifyAuthorisationToken';

class VerifyAuthorisationToken implements IVerifyAuthorisationToken {
  public constructor(
    private readonly tokenVerifier: IAuthorisationTokenVerifierService,
    private readonly logger: ILogger
  ) {}

  public async execute(command: IVerifyAuthorisationTokenCommand): Promise<void> {
    try {
      const verifyCommand = new TokenVerifyCommand(command.Token);

      await this.tokenVerifier.verify(verifyCommand);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    switch (error.constructor) {
      case InvalidAuthorisationTokenError:
        const tokenError = error as InvalidAuthorisationTokenError;

        this.logger.warning(error.message, tokenError.OriginalError);

        throw new TokenUnauthorisedError();
      default:
        this.logger.error(error.message, error);

        throw new TokenAuthorisationGenericError();
    }
  }
}

export { VerifyAuthorisationToken };
