interface IContainerRegistry {
  registerAll(): Promise<void>;
}

const IContainerRegistry = Symbol.for('IContainerRegistry');

export { IContainerRegistry };
