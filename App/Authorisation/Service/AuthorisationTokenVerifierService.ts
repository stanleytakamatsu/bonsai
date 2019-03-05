import { TokenVerificationError } from '../../Core/Token/Error/TokenVerificationError';
import { ITokenAdapter } from '../../Core/Token/ITokenAdapter';
import { TokenVerifyCommand } from '../Type/Command/Service/TokenVerifyCommand';
import { InvalidAuthorisationTokenError } from '../Type/Error/Service/InvalidAuthorisationTokenError';

import { IAuthorisationTokenVerifierService } from './IAuthorisationTokenVerifierService';

class AuthorisationTokenVerifierService implements IAuthorisationTokenVerifierService {
  public constructor(private readonly tokenAdapter: ITokenAdapter) {}

  public async verify(command: TokenVerifyCommand): Promise<void> {
    try {
      await this.tokenAdapter.verify(command.Token);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    let originalError = error;

    if (error instanceof TokenVerificationError) {
      const verificationError = error as TokenVerificationError;

      originalError = verificationError.OriginalError;
    }

    throw new InvalidAuthorisationTokenError(error.message, originalError);
  }
}

export { AuthorisationTokenVerifierService };
