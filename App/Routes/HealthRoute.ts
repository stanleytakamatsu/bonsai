import { IContainerService } from '../Core/Container/IContainerService';
import { IHttpServer } from '../Core/HttpServer/IHttpServer';
import { IHealthController } from '../Health/Controller/IHealthController';

import { BaseRoute } from './BaseRoute';

class HealthRoute extends BaseRoute {
  public static readonly VERSION: string = 'none';

  public constructor(container: IContainerService, httpServer: IHttpServer) {
    super(container, httpServer);
  }

  public async register(): Promise<void> {
    await this.registerHealthRoute();
  }

  private async registerHealthRoute(): Promise<void> {
    const healthController = await this.getController(IHealthController);

    await this.addHttpRoute({
      controller: healthController,
      methods: 'GET',
      path: '/health',
      version: HealthRoute.VERSION
    });
  }
}

export { HealthRoute };
