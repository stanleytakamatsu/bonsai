import { IContainerService } from '../IContainerService';

interface IContainerFactory {
  create(): IContainerService;
}

const IContainerFactory = Symbol.for('IContainerFactory');

export { IContainerFactory };
