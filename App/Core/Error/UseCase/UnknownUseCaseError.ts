import { HttpInternalServerError } from '../../HttpServer/Type/Error/HttpInternalServerError';

class UnknownUseCaseError extends HttpInternalServerError {
  public name = 'UnknownUseCaseError';

  private readonly originalError: Error;

  public constructor(message: string, originalError: Error) {
    super(message);
    this.originalError = originalError;
  }

  public get OriginalError(): Error {
    return this.originalError;
  }
}

export { UnknownUseCaseError };
