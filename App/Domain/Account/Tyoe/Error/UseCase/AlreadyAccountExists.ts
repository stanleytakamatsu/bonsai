import { HttpConflictError } from '../../../../../Core/HttpServer/Type/Error/HttpConflictError';

class AlreadyAccountExists extends HttpConflictError {
  public readonly name = 'AlreadyAccountExists';

  public constructor(email: string) {
    super(`The email ${email} already registered.`);
  }
}

export { AlreadyAccountExists };
