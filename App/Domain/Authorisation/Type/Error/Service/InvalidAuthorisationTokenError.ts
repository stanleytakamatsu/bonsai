import { ServiceError } from '../../../../../Core/Error/Service/ServiceError';

class InvalidAuthorisationTokenError extends ServiceError {
  private readonly originalError: Error;

  public constructor(message: string, originalError?: Error) {
    super(message);

    this.originalError = originalError;
  }

  public get OriginalError(): Error {
    return this.originalError;
  }
}

export { InvalidAuthorisationTokenError };
