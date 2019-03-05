interface ICreateHash {
  Email: string;
  Password: string;
  Salt: string;
}

const ICreateHash = Symbol.for('ICreateHash');

export { ICreateHash };
