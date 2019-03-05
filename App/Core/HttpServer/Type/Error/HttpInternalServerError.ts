import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpInternalServerError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.UNKNOWN_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpInternalServerError };
