interface ISerialize {
  serialize(data: any): string;
}

const ISerialize = Symbol.for('ISerialize');

export { ISerialize };
