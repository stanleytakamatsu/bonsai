interface ICreateNewHash {
  Email: string;
  Password: string;
}

const ICreateNewHash = Symbol.for('ICreateNewHash');

export { ICreateNewHash };
