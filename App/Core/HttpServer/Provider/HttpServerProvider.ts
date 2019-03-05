import { IContainerService } from '../../Container/IContainerService';
import { IProvider } from '../../Provider/IProvider';
import { ITracer } from '../../Tracer/ITracer';
import { HttpServerFactory } from '../Factory/HttpServerFactory';
import { IHttpServer } from '../IHttpServer';
import { Strategies } from '../Strategies';

class HttpServerProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerHttpServer();
  }

  private async registerHttpServer(): Promise<void> {
    const promisedHttpServer = new Promise<IHttpServer>(async resolve => {
      const tracer = await this.container.get<ITracer>(ITracer);
      const httpServer = await HttpServerFactory.create(Strategies.FASTFY, tracer);

      resolve(httpServer);
    });

    await this.container.register<IHttpServer>(IHttpServer, promisedHttpServer);
  }
}

export { HttpServerProvider };
