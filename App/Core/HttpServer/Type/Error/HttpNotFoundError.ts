import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpNotFoundError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.NOT_FOUND_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpNotFoundError };
