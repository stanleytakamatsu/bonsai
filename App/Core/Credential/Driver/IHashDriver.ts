import { Hash } from '../Entity/Hash';
import { ICreateHash } from '../Type/Command/Driver/ICreateHash';
import { ICreateNewHash } from '../Type/Command/Driver/ICreateNewHash';

interface IHashDriver {
  createNewHash(command: ICreateNewHash): Promise<Hash>;
  createHash(command: ICreateHash): Promise<Hash>;
}

const IHashDriver = Symbol.for('IHashDriver');

export { IHashDriver };
