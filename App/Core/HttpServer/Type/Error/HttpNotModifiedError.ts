import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpNotModifiedError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.NOT_MODIFIED_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpNotModifiedError };
