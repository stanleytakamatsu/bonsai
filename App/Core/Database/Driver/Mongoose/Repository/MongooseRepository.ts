import { Document, Model, Schema, SchemaDefinition } from 'mongoose';

import { IMongooseConnection } from '../Connection/IMongooseConnection';

abstract class MongooseRepository<T extends Document> {
  public static ERROR_CODE_DUPLICATED = '11000';
  protected documentModel: Model<T>;

  public constructor(
    connection: IMongooseConnection,
    collectionName: string,
    schemaDefinition: SchemaDefinition
  ) {
    const schema = new Schema(schemaDefinition);

    this.documentModel = connection.model<T>(collectionName, schema, collectionName);
  }
}

export { MongooseRepository };
