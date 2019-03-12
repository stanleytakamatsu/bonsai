import { Document } from 'mongoose';

interface IAccountModel extends Document {
  guid: string;
  email: string;
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
}

export { IAccountModel };
