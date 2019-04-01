import { HttpResponseFactory } from '../HttpServer/Factory/HttpResponseFactory';
import { IHttpBody } from '../HttpServer/IHttpBody';
import { IHttpError } from '../HttpServer/IHttpError';
import { IHttpRequest } from '../HttpServer/IHttpRequest';
import { IHttpResponse } from '../HttpServer/IHttpResponse';

import { IActionController } from './IActionController';

abstract class ActionController implements IActionController {
  protected createSuccessResponse(body: IHttpBody): IHttpResponse {
    return HttpResponseFactory.createSuccessResponse(body);
  }

  protected createCreatedResponse(body: IHttpBody): IHttpResponse {
    return HttpResponseFactory.createCreatedResponse(body);
  }

  protected createNoContentResponse(): IHttpResponse {
    return HttpResponseFactory.createNoContentResponse();
  }

  protected createErrorResponse(error: IHttpError): IHttpResponse {
    return HttpResponseFactory.createErrorResponse(error);
  }

  public abstract perform(request: IHttpRequest): Promise<IHttpResponse>;
}

export { ActionController };
