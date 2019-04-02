import { IHttpBody } from '../IHttpBody';
import { IHttpError } from '../IHttpError';
import { IHttpResponse } from '../IHttpResponse';
import { HttpResponse } from '../Type/Dto/HttpResponse';
import { HttpErrorTypes } from '../Type/Error/HttpErrorTypes';

class HttpResponseFactory {
  public static readonly HTTP_BAD_REQUEST = 400;

  public static readonly HTTP_CONFLICT = 409;

  public static readonly HTTP_CREATED = 201;

  public static readonly HTTP_FORBIDDEN = 403;

  public static readonly HTTP_NO_CONTENT = 204;

  public static readonly HTTP_NOT_FOUND = 404;

  public static readonly HTTP_NOT_MODIFIED = 304;

  public static readonly HTTP_OK = 200;

  public static readonly HTTP_SERVER_ERROR = 500;

  public static readonly HTTP_UNAUTHORIZED = 401;

  public static createCreatedResponse(body: IHttpBody): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_CREATED, body);
  }

  public static createErrorResponse(error: IHttpError): IHttpResponse {
    switch (error.ErrorType) {
      case HttpErrorTypes.BAD_REQUEST_ERROR:
        return this.createBadRequestResponse(error);
      case HttpErrorTypes.CONFLICT_ERROR:
        return this.createConflictResponse(error);
      case HttpErrorTypes.FORBIDDEN_ERROR:
        return this.createForbiddenResponse(error);
      case HttpErrorTypes.NOT_FOUND_ERROR:
        return this.createNotFoundResponse(error);
      case HttpErrorTypes.NOT_MODIFIED_ERROR:
        return this.createNotModifiedResponse(error);
      case HttpErrorTypes.UNAUTHORIZED_ERROR:
        return this.createUnauthorizedResponse(error);
      case HttpErrorTypes.UNKNOWN_ERROR:
        return this.createInternalServerErrorResponse(error);
      default:
        return this.createInternalServerErrorResponse(error);
    }
  }

  public static createSuccessResponse(body: any): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_OK, body);
  }

  public static createNoContentResponse(): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_NO_CONTENT, undefined);
  }

  public static createNotModifiedResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_NOT_MODIFIED, error);
  }

  public static createBadRequestResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_BAD_REQUEST, error);
  }

  public static createUnauthorizedResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_UNAUTHORIZED, error);
  }

  public static createForbiddenResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_FORBIDDEN, error);
  }

  public static createNotFoundResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_NOT_FOUND, error);
  }

  public static createConflictResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_CONFLICT, error);
  }

  public static createInternalServerErrorResponse(error: IHttpError): IHttpResponse {
    return new HttpResponse(HttpResponseFactory.HTTP_SERVER_ERROR, error);
  }
}

export { HttpResponseFactory };
