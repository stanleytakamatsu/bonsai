import { IHttpRequest } from '../../../Core/HttpServer/IHttpRequest';
import { IUserSignInParamter } from '../Tyoe/Parameter/IUserSignInParamter';

class UserSignInParameterFactory {
  public static create(request: IHttpRequest): IUserSignInParamter {
    const email = request.Body ? request.Body.email : undefined;
    const password = request.Body ? request.Body.password : undefined;

    return {
      Email: email,
      Password: password
    };
  }
}

export { UserSignInParameterFactory };
