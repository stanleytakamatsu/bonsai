import { IContainerService } from '../Core/Container/IContainerService';
import { IActionController } from '../Core/Controller/IActionController';
import { IHttpMiddleware } from '../Core/HttpServer/IHttpMiddleware';
import { IHttpRoute } from '../Core/HttpServer/IHttpRoute';
import { IHttpServer } from '../Core/HttpServer/IHttpServer';

import { IRoute } from './IRoute';

abstract class BaseRoute implements IRoute {
  public constructor(
    protected readonly container: IContainerService,
    protected readonly httpServer: IHttpServer
  ) {}

  public abstract async register(): Promise<void>;

  protected async addHttpRoute(route: IHttpRoute): Promise<void> {
    route.path =
      route.version === '' || route.version === 'none'
        ? route.path
        : `/${route.version}${route.path}`;

    this.httpServer.route(route);
  }

  protected async getController(controllerName: symbol): Promise<IActionController> {
    return this.container.get<IActionController>(controllerName);
  }

  protected async getMiddleware(name: symbol): Promise<IHttpMiddleware> {
    return this.container.get<IHttpMiddleware>(name);
  }
}

export { BaseRoute };
