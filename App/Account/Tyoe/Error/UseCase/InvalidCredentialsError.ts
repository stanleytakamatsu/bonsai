import { HttpForbiddenError } from '../../../../Core/HttpServer/Type/Error/HttpForbiddenError';

class InvalidCredentialsError extends HttpForbiddenError {
  public constructor() {
    super('Invalid credentials');
  }
}

export { InvalidCredentialsError };
