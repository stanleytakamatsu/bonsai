import { ActionController } from '../../Core/Controller/ActionController';
import { IHttpRequest } from '../../Core/HttpServer/IHttpRequest';
import { IHttpResponse } from '../../Core/HttpServer/IHttpResponse';
import { UserSignUpParameterFactory } from '../Factory/UserSignUpParameterFactory';
import { UserSignUpCommand } from '../Tyoe/Command/UseCase/UserSignUpCommand';
import { IUserSignUp } from '../UseCase/IUserSignUp';
import { IUserSignUpValidator } from '../Validator/IUserSignUpValidator';

import { ISignUpController } from './ISignUpController';

class SignUpController extends ActionController implements ISignUpController {
  public constructor(
    private readonly signUp: IUserSignUp,
    private readonly validator: IUserSignUpValidator
  ) {
    super();
  }

  public async perform(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const params = UserSignUpParameterFactory.create(request);

      this.validator.validate(params);

      const command = UserSignUpCommand.create(params.Email, params.Password);

      await this.signUp.execute(command);

      return this.createSuccessResponse({
        message: `User ${params.Email} created with successfully.`
      });
    } catch (error) {
      return this.createErrorResponse(error);
    }
  }
}

export { SignUpController };
