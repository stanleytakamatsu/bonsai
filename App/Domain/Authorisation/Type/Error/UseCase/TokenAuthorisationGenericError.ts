import { HttpInternalServerError } from '../../../../../Core/HttpServer/Type/Error/HttpInternalServerError';

class TokenAuthorisationGenericError extends HttpInternalServerError {
  public constructor() {
    super('Something wrong is happening while the application tried to authorize this token');
  }
}

export { TokenAuthorisationGenericError };
