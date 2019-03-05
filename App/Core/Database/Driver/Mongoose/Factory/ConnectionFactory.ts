import { Connection, ConnectionOptions, createConnection, set } from 'mongoose';

import { IApplicationConfiguration } from '../../../../../../Config/IApplicationConfiguration';
import { ITracer } from '../../../../Tracer/ITracer';
import { IMongooseConnection } from '../Connection/IMongooseConnection';

class ConnectionFactory {
  public static async create(
    config: IApplicationConfiguration,
    tracer: ITracer
  ): Promise<IMongooseConnection> {
    const connectionString = config.databaseUrl();

    const options: ConnectionOptions = {
      useFindAndModify: false,
      useNewUrlParser: true
    };

    const connection = createConnection(connectionString, options);

    await this.configureTracer(connection, tracer);

    return connection as IMongooseConnection;
  }

  private static async configureTracer(connection: Connection, tracer: ITracer): Promise<void> {
    set('debug', (coll, method, query, _doc, options) => {
      const dbQuery = JSON.stringify(query);
      const dbOptions = JSON.stringify(options);
      const dbCommand = `db.${coll}.${method}(${dbQuery}, ${dbOptions});`;

      const traceSpan = tracer.createChildSpanFromActiveScope('mongodb.query');

      traceSpan.addTags({
        'db.name': connection.db.databaseName,
        'resource.name': method,
        'service.name': 'hr-refill-v2-mongodb',
        'span.type': 'mongodb'
      });

      traceSpan.setTag('mongodb.query', dbCommand);

      traceSpan.finish();
    });
  }
}

export { ConnectionFactory };
