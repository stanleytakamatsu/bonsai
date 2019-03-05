import { IApplicationConfiguration } from '../../../../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../../../Container/IContainerService';
import { IProvider } from '../../../../Provider/IProvider';
import { ITracer } from '../../../../Tracer/ITracer';
import { IMongooseConnection } from '../Connection/IMongooseConnection';
import { ConnectionFactory } from '../Factory/ConnectionFactory';

class MongooseProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerMongooseConnection();
  }

  private async registerMongooseConnection(): Promise<void> {
    const promisedConnection = new Promise<IMongooseConnection>(async resolve => {
      const tracer = await this.container.get<ITracer>(ITracer);
      const config = await this.container.get<IApplicationConfiguration>(IApplicationConfiguration);
      const connection = await ConnectionFactory.create(config, tracer);

      resolve(connection);
    });

    await this.container.register<IMongooseConnection>(IMongooseConnection, promisedConnection);
  }
}

export { MongooseProvider };
