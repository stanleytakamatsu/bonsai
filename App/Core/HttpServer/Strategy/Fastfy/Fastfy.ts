import * as Fastify from 'fastify';

import { ITraceSpan } from '../../../Tracer/Driver/ITraceSpan';
import { ITracer } from '../../../Tracer/ITracer';
import { HttpResponseFactory } from '../../Factory/HttpResponseFactory';
import { IHttpMiddleware } from '../../IHttpMiddleware';
import { IHttpRequest } from '../../IHttpRequest';
import { IHttpResponse } from '../../IHttpResponse';
import { IHttpRoute } from '../../IHttpRoute';
import { IHttpServer } from '../../IHttpServer';
import { HttpRequest } from '../../Type/Dto/HttpRequest';

class FastfyServer implements IHttpServer {
  private readonly server: Fastify.FastifyInstance<any, any, any>;

  public constructor(private readonly tracer: ITracer) {
    this.server = Fastify({
      logger: false
    });
  }

  public route(route: IHttpRoute): IHttpServer {
    const handleRequest = async (
      httpPoute: IHttpRoute,
      request: Fastify.FastifyRequest<any>,
      reply: Fastify.FastifyReply<any>
    ): Promise<void> => this.handleRequest(httpPoute, request, reply);

    this.server.route({
      method: route.methods,
      url: route.path,
      async handler(
        request: Fastify.FastifyRequest<any>,
        reply: Fastify.FastifyReply<any>
      ): Promise<void> {
        return handleRequest(route, request, reply);
      }
    });

    return this;
  }

  public async start(port: number): Promise<void> {
    await this.server.listen(port, '0.0.0.0');
  }

  private async executeMiddlewares(
    middlewares: IHttpMiddleware[],
    request: IHttpRequest
  ): Promise<IHttpResponse> {
    for (let i = 0; i < middlewares.length; i += 1) {
      const middleware = middlewares[i];

      const httpResponse = await middleware.perform(request);

      if (httpResponse !== undefined) {
        return httpResponse;
      }
    }
  }

  private async handleRequest(
    route: IHttpRoute,
    request: Fastify.FastifyRequest<any>,
    reply: Fastify.FastifyReply<any>
  ): Promise<void> {
    const traceScope = this.tracer.createScope('web.request');

    const traceSpan = traceScope.getSpan();

    this.traceHttpRequest(traceSpan, route, request);

    try {
      const httpRequest = await FastfyServer.createHttpRequest(request);

      let httpResponse: IHttpResponse;

      if (route.before !== undefined) {
        httpResponse = await this.executeMiddlewares(route.before, httpRequest);
      }

      if (httpResponse === undefined) {
        httpResponse = await route.controller.perform(httpRequest);
      }

      const jsonResponse = httpResponse.toJSON();

      this.traceHttpResponse(traceSpan, httpResponse);

      traceScope.close();

      reply.code(httpResponse.StatusCode).send(jsonResponse);
    } catch (error) {
      const errorResponse = HttpResponseFactory.createErrorResponse(error);

      this.traceHttpResponse(traceSpan, errorResponse);

      traceScope.close();

      reply.code(errorResponse.StatusCode).send(errorResponse.toJSON());
    }
  }

  private traceHttpRequest(
    traceSpan: ITraceSpan,
    route: IHttpRoute,
    request: Fastify.FastifyRequest<any>
  ): void {
    const protocol = request.req.encrypted ? 'https' : 'http';
    const url = `${protocol}://${request.req.headers.host}${request.req.url}`;
    const resourceName = `${request.req.method} ${route.path}`;

    traceSpan.addTags({
      'http.body': JSON.stringify(request.body),
      'http.headers': JSON.stringify(request.headers),
      'http.method': request.req.method,
      'http.params': JSON.stringify(request.params),
      'http.route': request.req.url,
      'http.url': url,
      'resource.name': resourceName,
      'service.name': 'hr-refill-v2-http',
      'span.kind': 'server',
      'span.type': 'http'
    });
  }

  private traceHttpResponse(traceSpan: ITraceSpan, response: IHttpResponse): void {
    const httpErrorFrom = 500;
    const isError: boolean = response.StatusCode >= httpErrorFrom;

    traceSpan.setTag('http.status_code', response.StatusCode);

    if (isError) {
      traceSpan.setTag('error', true);
    }

    if (response.StatusCode === HttpResponseFactory.HTTP_BAD_REQUEST) {
      traceSpan.setTag('http.validation_error', JSON.stringify(response.Body.details));
    }
  }

  private static async createHttpRequest(
    request: Fastify.FastifyRequest<any>
  ): Promise<IHttpRequest> {
    return new HttpRequest(request.query, request.body, request.headers, request.params);
  }
}

export { FastfyServer };
