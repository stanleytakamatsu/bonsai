import { ISignInController } from '../../Account/Controller/ISignInController';
import { ISignUpController } from '../../Account/Controller/ISignUpController';
import { IContainerService } from '../../Core/Container/IContainerService';
import { IHttpServer } from '../../Core/HttpServer/IHttpServer';

import { Api } from './Api';

class AccountRoute extends Api {
  public constructor(container: IContainerService, httpServer: IHttpServer) {
    super(container, httpServer);
  }

  public async register(): Promise<void> {
    await this.registerSignUpRoute();
    await this.registerSignInRoute();
  }

  private async registerSignUpRoute(): Promise<void> {
    const controller = await this.getController(ISignUpController);

    await this.addHttpRoute({
      controller,
      methods: 'POST',
      path: '/accounts',
      version: AccountRoute.VERSION
    });
  }

  private async registerSignInRoute(): Promise<void> {
    const controller = await this.getController(ISignInController);

    await this.addHttpRoute({
      controller,
      methods: 'POST',
      path: '/accounts/logins',
      version: AccountRoute.VERSION
    });
  }
}

export { AccountRoute };
