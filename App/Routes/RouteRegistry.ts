import { IContainerService } from '../Core/Container/IContainerService';
import { IHttpServer } from '../Core/HttpServer/IHttpServer';
import { INewable } from '../Core/Interface/INewable';

import { HealthRoute } from './HealthRoute';
import { IRoute } from './IRoute';
import { AccountRoute } from './v1/AccountRoute';

class RouteRegistry {
  private static readonly REGISTERED_ROUTES: INewable<IRoute>[] = [HealthRoute, AccountRoute];

  public constructor(private readonly container: IContainerService) {}

  public async registerAll(): Promise<void> {
    const routesCount = RouteRegistry.REGISTERED_ROUTES.length;

    for (let i = 0; i < routesCount; i += 1) {
      await this.registerRoute(RouteRegistry.REGISTERED_ROUTES[i]);
    }
  }

  public async registerRoute(newableRoute: INewable<IRoute>): Promise<void> {
    const server = await this.container.get(IHttpServer);
    const route: IRoute = new newableRoute(this.container, server);

    await route.register();
  }
}

export { RouteRegistry };
