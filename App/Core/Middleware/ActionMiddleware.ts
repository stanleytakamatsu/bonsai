import { HttpResponseFactory } from '../HttpServer/Factory/HttpResponseFactory';
import { IHttpError } from '../HttpServer/IHttpError';
import { IHttpMiddleware } from '../HttpServer/IHttpMiddleware';
import { IHttpRequest } from '../HttpServer/IHttpRequest';
import { IHttpResponse } from '../HttpServer/IHttpResponse';

abstract class ActionMiddleware implements IHttpMiddleware {
  protected createErrorResponse(error: IHttpError): IHttpResponse {
    return HttpResponseFactory.createErrorResponse(error);
  }

  public abstract async perform(request: IHttpRequest): Promise<IHttpResponse>;
}

export { ActionMiddleware };
