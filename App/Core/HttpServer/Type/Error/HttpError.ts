import { IHttpError } from '../../IHttpError';

abstract class HttpError implements IHttpError, Error {
  public readonly name: string;

  public readonly stack: string = new Error().stack;

  public message: string;

  protected errorType: string;

  protected originalErrorType: string;

  public constructor() {
    this.name = this.constructor.name;
  }

  public get ErrorType(): string {
    return this.errorType;
  }

  public get Message(): string {
    return this.message;
  }

  public get OriginalErrorType(): string {
    return this.originalErrorType;
  }

  public get Stack(): string {
    return this.stack;
  }
}

export { HttpError };
