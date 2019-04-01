interface IAccountModel {
  id: string;
  guid: string;
  email: string;
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
}

export { IAccountModel };
