interface IContainerService {
  register<T>(serviceIdentifier: symbol, service: Promise<T>): Promise<void>;

  get<T>(serviceIdentifier: symbol): Promise<T>;
}

const IContainerService = Symbol.for('IContainerService');

export { IContainerService };
