interface IFindAccountByEmailQuery {
  Email: string;
}

const IFindAccountByEmailQuery = Symbol.for('IFindAccountByEmailQuery');

export { IFindAccountByEmailQuery };
