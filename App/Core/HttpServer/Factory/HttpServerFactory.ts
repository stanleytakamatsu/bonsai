import { ITracer } from '../../Tracer/ITracer';
import { HttpServer } from '../HttpServer';
import { IHttpServer } from '../IHttpServer';
import { Strategies } from '../Strategies';
import { FastfyServer } from '../Strategy/Fastfy/Fastfy';

class HttpServerFactory {
  public static async create(strategy: Strategies, tracer: ITracer): Promise<IHttpServer> {
    switch (strategy) {
      case Strategies.FASTFY:
        return this.createFastfyHttpServer(tracer);
      default:
        return this.createFastfyHttpServer(tracer);
    }
  }

  public static async createFastfyHttpServer(tracer: ITracer): Promise<IHttpServer> {
    const fastfy = new FastfyServer(tracer);

    return new HttpServer(fastfy);
  }
}

export { HttpServerFactory };
