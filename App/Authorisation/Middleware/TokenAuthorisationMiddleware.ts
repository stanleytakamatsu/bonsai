import { IHttpRequest } from '../../Core/HttpServer/IHttpRequest';
import { IHttpResponse } from '../../Core/HttpServer/IHttpResponse';
import { ActionMiddleware } from '../../Core/Middleware/ActionMiddleware';
import { AuthorisationParametersFactory } from '../Factory/AuthorisationParametersFactory';
import { VerifyAuthorisationTokenCommand } from '../Type/Command/UseCase/VerifyAuthorisationTokenCommand';
import { IVerifyAuthorisationToken } from '../UseCase/IVerifyAuthorisationToken';

import { ITokenAuthorisationMiddleware } from './ITokenAuthorisationMiddleware';

class TokenAuthorisationMiddleware extends ActionMiddleware
  implements ITokenAuthorisationMiddleware {
  public constructor(private readonly verifyAuthorisationToken: IVerifyAuthorisationToken) {
    super();
  }

  public async perform(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const params = AuthorisationParametersFactory.build(request);

      const command = new VerifyAuthorisationTokenCommand(params.BearerToken);

      await this.verifyAuthorisationToken.execute(command);
    } catch (error) {
      return this.createErrorResponse(error);
    }
  }
}

export { TokenAuthorisationMiddleware };
