interface IProvider {
  register(): Promise<void>;
}

const IProvider = Symbol.for('IProvider');

export { IProvider };
