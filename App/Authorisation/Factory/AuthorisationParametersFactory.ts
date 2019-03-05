import { IHttpRequest } from '../../Core/HttpServer/IHttpRequest';
import { IAuthorisationParameters } from '../Type/Parameter/IAuthorisationParameters';

class AuthorisationParametersFactory {
  public static build(request: IHttpRequest): IAuthorisationParameters {
    let authorisation = request.Headers.authorisation;

    if (authorisation === undefined) {
      authorisation = '';
    }

    const tokenSchema = authorisation.split(' ');

    return {
      BearerToken: tokenSchema[1]
    };
  }
}

export { AuthorisationParametersFactory };
