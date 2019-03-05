interface IContainerStrategy {
  register<T>(identifier: symbol, service: Promise<T>): Promise<void>;

  get<T>(identifier: symbol): Promise<T>;
}

const IContainerStrategy = Symbol.for('IContainerStrategy');

export { IContainerStrategy };
