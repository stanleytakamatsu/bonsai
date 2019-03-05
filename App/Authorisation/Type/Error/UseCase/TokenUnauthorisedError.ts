import { HttpUnauthorizedError } from '../../../../Core/HttpServer/Type/Error/HttpUnauthorizedError';

class TokenUnauthorisedError extends HttpUnauthorizedError {
  public constructor() {
    super('Invalid or non existent authorization token');
  }
}

export { TokenUnauthorisedError };
