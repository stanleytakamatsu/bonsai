import { Document, Model, Schema } from 'mongoose';

interface IMongooseConnection {
  model<T extends Document>(name: string, schema?: Schema, collection?: string): Model<T>;
}

const IMongooseConnection = Symbol.for('IMongooseConnection');

export { IMongooseConnection };
