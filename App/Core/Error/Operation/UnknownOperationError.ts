import { HttpInternalServerError } from '../../HttpServer/Type/Error/HttpInternalServerError';

class UnknownOperationError extends HttpInternalServerError {
  public readonly name = 'UnknownOperationError';

  private readonly originalError: Error;

  public constructor(message: string, originalError: Error) {
    super(message);
    this.originalError = originalError;
  }

  public get OriginalError(): Error {
    return this.originalError;
  }
}

export { UnknownOperationError };
