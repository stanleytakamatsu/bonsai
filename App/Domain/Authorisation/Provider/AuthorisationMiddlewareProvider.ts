import { IContainerService } from '../../../Core/Container/IContainerService';
import { IProvider } from '../../../Core/Provider/IProvider';
import { ITokenAuthorisationMiddleware } from '../Middleware/ITokenAuthorisationMiddleware';
import { TokenAuthorisationMiddleware } from '../Middleware/TokenAuthorisationMiddleware';
import { IVerifyAuthorisationToken } from '../UseCase/IVerifyAuthorisationToken';

class AuthorisationMiddlewareProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerTokenAuthorisationMiddleware();
  }

  private async registerTokenAuthorisationMiddleware(): Promise<void> {
    const promisedMiddleware = new Promise<ITokenAuthorisationMiddleware>(async resolve => {
      const operation = await this.container.get<IVerifyAuthorisationToken>(
        IVerifyAuthorisationToken
      );

      const middleware = new TokenAuthorisationMiddleware(operation);

      resolve(middleware);
    });

    await this.container.register<ITokenAuthorisationMiddleware>(
      ITokenAuthorisationMiddleware,
      promisedMiddleware
    );
  }
}

export { AuthorisationMiddlewareProvider };
