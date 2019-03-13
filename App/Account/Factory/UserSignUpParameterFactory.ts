import { IHttpRequest } from '../../Core/HttpServer/IHttpRequest';
import { IUserSignUpParamter } from '../Tyoe/Parameter/IUserSignUpParamter';

class UserSignUpParameterFactory {
  public static create(request: IHttpRequest): IUserSignUpParamter {
    const email = request.Body ? request.Body.email : undefined;
    const password = request.Body ? request.Body.password : undefined;

    return {
      Email: email,
      Password: password
    };
  }
}

export { UserSignUpParameterFactory };
