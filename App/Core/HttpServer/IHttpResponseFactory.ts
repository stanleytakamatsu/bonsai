import { IHttpResponse } from './IHttpResponse';

interface IIHttpResponseFactory {
  create(): IHttpResponse;
}

const IIHttpResponseFactory = Symbol.for('IIHttpResponseFactory');

export { IIHttpResponseFactory };
