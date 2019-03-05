import { RepositoryError } from './RepositoryError';

class DeleteRecordError extends RepositoryError {
  public constructor(message: string, private readonly orignalError: Error) {
    super(message);
  }

  public get OriginalError(): Error {
    return this.orignalError;
  }
}

export { DeleteRecordError };
