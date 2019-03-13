import * as _ from 'lodash';

import { IContainerService } from '../Container/IContainerService';

import { IContainerStrategy } from './Strategy/IContainerStrategy';

class ContainerService implements IContainerService {
  private static readonly RETRY_LIMIT = 3;

  private readonly retryCounter: { [key: string]: number } = {};

  public constructor(private readonly container: IContainerStrategy) {}

  public async register<T>(serviceIdentifier: symbol, service: Promise<T>): Promise<void> {
    await this.container.register<T>(serviceIdentifier, service);
  }

  public async get<T>(serviceIdentifier: symbol): Promise<T> {
    try {
      return await this.container.get<T>(serviceIdentifier);
    } catch (e) {
      const serviceIdentifierInString = serviceIdentifier.toString();
      this.retryCounter[serviceIdentifierInString] =
        (this.retryCounter[serviceIdentifierInString] || 0) + 1;

      if (this.retryCounter[serviceIdentifierInString] >= ContainerService.RETRY_LIMIT) {
        throw new Error(`Cannot find in the registry name: ${serviceIdentifierInString}`);
      }

      return this.get<T>(serviceIdentifier);
    }
  }
}

export { ContainerService };
