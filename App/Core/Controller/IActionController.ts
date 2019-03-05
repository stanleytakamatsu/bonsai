import { IHttpRequest } from '../HttpServer/IHttpRequest';
import { IHttpResponse } from '../HttpServer/IHttpResponse';

interface IActionController {
  perform(request: IHttpRequest): Promise<IHttpResponse>;
}

const IActionController = Symbol.for('IActionController');

export { IActionController };
