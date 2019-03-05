import { IActionController } from '../Controller/IActionController';

import { IHttpMiddleware } from './IHttpMiddleware';

interface IHttpRoute {
  before?: IHttpMiddleware[];
  controller: IActionController;
  methods: HttpMethod | HttpMethod[];
  path: string;
  version?: string;
}

const IHttpRoute = Symbol.for('IHttpRoute');

export { IHttpRoute };
