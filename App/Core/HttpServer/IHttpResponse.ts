import { Serialize } from '../Serialize/Serialize';

interface IHttpResponse extends Serialize {
  readonly Body: any;
  readonly StatusCode: number;
  toJSON(): any;
}

const IHttpResponse = Symbol.for('IHttpResponse');

export { IHttpResponse };
