import { RepositoryError } from './RepositoryError';

class SaveRecordError extends RepositoryError {
  private readonly originalError: Error;

  public constructor(message: string, originalError: Error) {
    super(message);
    this.originalError = originalError;
  }

  public get OriginalError(): Error {
    return this.originalError;
  }
}

export { SaveRecordError };
