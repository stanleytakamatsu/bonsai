interface IFromJson {
  deserialize<T>(data: any): T;
}

interface IDeserialize {}

const IDeserialize = Symbol.for('IDeserialize');
const IFromJson = Symbol.for('IFromJson');

export { IDeserialize, IFromJson };
