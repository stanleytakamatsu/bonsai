import { HttpError } from './HttpError';
import { HttpErrorTypes } from './HttpErrorTypes';

abstract class HttpConflictError extends HttpError {
  public constructor(message: string) {
    super();

    this.errorType = HttpErrorTypes.CONFLICT_ERROR;
    this.message = message;
    this.originalErrorType = this.constructor.name;
  }
}

export { HttpConflictError };
