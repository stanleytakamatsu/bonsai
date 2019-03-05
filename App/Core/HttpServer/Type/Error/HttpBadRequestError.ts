import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpBadRequestError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.BAD_REQUEST_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpBadRequestError };
