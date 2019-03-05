import { IContainerService } from '../../Core/Container/IContainerService';
import { IHttpServer } from '../../Core/HttpServer/IHttpServer';
import { BaseRoute } from '../BaseRoute';

abstract class Api extends BaseRoute {
  public static readonly VERSION = 'v1';

  public constructor(container: IContainerService, httpServer: IHttpServer) {
    super(container, httpServer);
  }
}

export { Api };
