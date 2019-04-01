interface IHttpBody {
  readonly message: any;
  readonly data?: any;
}

const IHttpBody = Symbol.for('IHttpBody');

export { IHttpBody };
