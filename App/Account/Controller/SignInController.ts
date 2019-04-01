import { ActionController } from '../../Core/Controller/ActionController';
import { IHttpRequest } from '../../Core/HttpServer/IHttpRequest';
import { IHttpResponse } from '../../Core/HttpServer/IHttpResponse';
import { UserSignUpParameterFactory } from '../Factory/UserSignUpParameterFactory';
import { UserSignInCommand } from '../Tyoe/Command/UseCase/UserSignInCommand';
import { AccountAuthorisationMapper } from '../Tyoe/Mapper/AccountAuthorisationMapper';
import { IUserSignIn } from '../UseCase/IUserSignIn';
import { IUserSignInValidator } from '../Validator/IUserSignInValidator';

import { ISignInController } from './ISignInController';

class SignInController extends ActionController implements ISignInController {
  public constructor(
    private readonly signIn: IUserSignIn,
    private readonly validator: IUserSignInValidator
  ) {
    super();
  }

  public async perform(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const params = UserSignUpParameterFactory.create(request);

      this.validator.validate(params);

      const command = UserSignInCommand.create(params.Email, params.Password);

      const accountAuthorisation = await this.signIn.execute(command);

      const mapper = AccountAuthorisationMapper.create(accountAuthorisation);

      return this.createSuccessResponse({
        data: mapper,
        message: `User account ${params.Email} logged in with successfully.`
      });
    } catch (error) {
      return this.createErrorResponse(error);
    }
  }
}

export { SignInController };
