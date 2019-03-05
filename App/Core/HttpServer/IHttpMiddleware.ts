import { IHttpRequest } from './IHttpRequest';
import { IHttpResponse } from './IHttpResponse';

interface IHttpMiddleware {
  perform(request: IHttpRequest): Promise<IHttpResponse>;
}

export { IHttpMiddleware };
