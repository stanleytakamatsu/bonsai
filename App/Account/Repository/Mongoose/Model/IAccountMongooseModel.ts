import { Document } from 'mongoose';

import { IAccountModel } from '../../Model/IAccountModel';

type IAccountMongooseModel = IAccountModel & Document;

export { IAccountMongooseModel };
