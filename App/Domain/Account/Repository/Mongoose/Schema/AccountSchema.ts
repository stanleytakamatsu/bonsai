import { SchemaDefinition } from 'mongoose';

const AccountSchema: SchemaDefinition = {
  createdAt: Date,
  email: { type: String, required: true, unique: true },
  guid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  updatedAt: Date
};

export { AccountSchema };
