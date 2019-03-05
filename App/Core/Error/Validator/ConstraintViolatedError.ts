import { HttpBadRequestError } from '../../HttpServer/Type/Error/HttpBadRequestError';

class ConstraintViolatedError extends HttpBadRequestError {
  private readonly details: any;

  public constructor(message: string, details: any) {
    super(message);

    this.details = details;
  }

  public get Details(): any {
    return this.details;
  }
}

export { ConstraintViolatedError };
