interface IRoute {
  register(): Promise<void>;
}

const IRoute = Symbol.for('IRoute');

export { IRoute };
