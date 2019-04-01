import { HttpInternalServerError } from '../../../../../Core/HttpServer/Type/Error/HttpInternalServerError';

class TokenGenerationGenericError extends HttpInternalServerError {
  public constructor() {
    super('An error occurred while trying to generate authorisation token.');
  }
}

export { TokenGenerationGenericError };
