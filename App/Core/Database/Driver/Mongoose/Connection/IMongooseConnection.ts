import { Connection } from 'mongoose';

interface IMongooseConnection extends Connection {}

const IMongooseConnection = Symbol.for('IMongooseConnection');

export { IMongooseConnection };
