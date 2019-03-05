import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpForbiddenError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.FORBIDDEN_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpForbiddenError };
