import { IHttpRequest } from '../../IHttpRequest';

class HttpRequest implements IHttpRequest {
  public constructor(
    private readonly querystring: any,
    private readonly body: any,
    private readonly headers: any,
    private readonly params: any
  ) {}

  public get QueryString(): any {
    return this.querystring;
  }

  public get Body(): any {
    return this.body;
  }

  public get Headers(): any {
    return this.headers;
  }

  public get Params(): any {
    return this.params;
  }
}

export { HttpRequest };
