import { UnknownUseCaseError } from '../../../../../Core/Error/UseCase/UnknownUseCaseError';

class SignUpGenericError extends UnknownUseCaseError {
  public readonly name = 'SignUpGenericError';

  public constructor(error: Error) {
    super('An error occurred while trying create account..', error);
  }
}

export { SignUpGenericError };
