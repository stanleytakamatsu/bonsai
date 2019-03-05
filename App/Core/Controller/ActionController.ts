import { HttpResponseFactory } from '../HttpServer/Factory/HttpResponseFactory';
import { IHttpError } from '../HttpServer/IHttpError';
import { IHttpRequest } from '../HttpServer/IHttpRequest';
import { IHttpResponse } from '../HttpServer/IHttpResponse';

import { IActionController } from './IActionController';

abstract class ActionController implements IActionController {
  protected createSuccessResponse(body: any): IHttpResponse {
    return HttpResponseFactory.createSuccessResponse(body);
  }

  protected createCreatedResponse(body: any): IHttpResponse {
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
