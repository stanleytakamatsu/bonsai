import { IHttpRequest } from './IHttpRequest';
import { IHttpResponse } from './IHttpResponse';

type IHttpHandler = (request: IHttpRequest) => IHttpResponse;

const IHttpHandler = Symbol.for('IHttpHandler');

export { IHttpHandler };
