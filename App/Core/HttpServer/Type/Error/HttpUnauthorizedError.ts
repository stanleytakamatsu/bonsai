import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpUnauthorizedError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.UNAUTHORIZED_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpUnauthorizedError };
