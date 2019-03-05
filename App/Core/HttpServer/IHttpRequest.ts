interface IHttpRequest {
  readonly Body: any;
  readonly Headers: any;
  readonly Params: any;
  readonly QueryString: any;
}

const IHttpRequest = Symbol.for('IHttpRequest');

export { IHttpRequest };
