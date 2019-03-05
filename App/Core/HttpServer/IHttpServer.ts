import { IHttpRoute } from './IHttpRoute';

interface IHttpServer {
  route(route: IHttpRoute): IHttpServer;
  start(port: number): Promise<void>;
}

const IHttpServer = Symbol.for('IHttpServer');

export { IHttpServer };
