import { RepositoryError } from './RepositoryError';

class RecordNotFoundError extends RepositoryError {
  public constructor(message: string) {
    super(message);
  }
}

export { RecordNotFoundError };
