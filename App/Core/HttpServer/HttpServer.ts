import { IHttpRoute } from './IHttpRoute';
import { IHttpServer } from './IHttpServer';

class HttpServer implements IHttpServer {
  public constructor(private readonly server: IHttpServer) {}

  public route(route: IHttpRoute): IHttpServer {
    this.server.route(route);

    return this;
  }

  public async start(port: number): Promise<void> {
    await this.server.start(port);
  }
}

export { HttpServer };
