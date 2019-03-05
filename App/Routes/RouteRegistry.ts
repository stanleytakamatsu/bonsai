import { IContainerService } from '../Core/Container/IContainerService';
import { IHttpServer } from '../Core/HttpServer/IHttpServer';
import { INewable } from '../Core/Interface/INewable';

import { HealthRoute } from './HealthRoute';
import { IRoute } from './IRoute';

class RouteRegistry {
  private static readonly REGISTERED_ROUTES: INewable<IRoute>[] = [HealthRoute];

  public constructor(private readonly container: IContainerService) {}

  public async registerAll(): Promise<void> {
    RouteRegistry.REGISTERED_ROUTES.forEach(
      async newableRoute => this.registerRoute(newableRoute)
    );
  }

  public async registerRoute(newableRoute: INewable<IRoute>): Promise<void> {
    const server = await this.container.get(IHttpServer);
    const route: IRoute = new newableRoute(this.container, server);

    await route.register();
  }
}

export { RouteRegistry };
