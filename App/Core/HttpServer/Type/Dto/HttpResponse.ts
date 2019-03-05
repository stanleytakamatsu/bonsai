import { Serialize } from '../../../Serialize/Serialize';
import { IHttpResponse } from '../../IHttpResponse';

class HttpResponse extends Serialize implements IHttpResponse {
  public constructor(private readonly statusCode: number, private readonly body: any) {
    super();
  }

  public get StatusCode(): number {
    return this.statusCode;
  }

  public get Body(): any {
    return this.body;
  }

  public toJSON(): any {
    if (this.Body === undefined) {
      return this.Body;
    }

    return this.serialize(this.Body);
  }
}

export { HttpResponse };
