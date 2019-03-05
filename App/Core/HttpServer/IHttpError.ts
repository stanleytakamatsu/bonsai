interface IHttpError {
  ErrorType: string;
  Message: string;
  OriginalErrorType: string;
  Stack: any;
}

const IHttpError = Symbol.for('IHttpError');

export { IHttpError };
