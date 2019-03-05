import { IHttpRoute } from '../IHttpRoute';
import { IHttpServer } from '../IHttpServer';

interface IHttpServerStrategy {
  route(route: IHttpRoute): IHttpServer;
  start(port: number): Promise<void>;
}

const IHttpServerStrategy = Symbol.for('IHttpServerStrategy');

export { IHttpServerStrategy };
