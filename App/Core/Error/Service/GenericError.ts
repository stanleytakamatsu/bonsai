import { ServiceError } from './ServiceError';

class GenericError extends ServiceError {
  private readonly originalError: Error;

  public constructor(message: string, originalError: Error) {
    super(message);

    this.originalError = originalError;
  }

  public get OriginalError(): Error {
    return this.originalError;
  }
}

export { GenericError };
