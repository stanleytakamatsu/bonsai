import { RepositoryError } from './RepositoryError';

class ConflictRecordError extends RepositoryError {
  public constructor(message: string) {
    super(message);
  }
}

export { ConflictRecordError };
