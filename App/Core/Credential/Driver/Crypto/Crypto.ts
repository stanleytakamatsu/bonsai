import * as crypto from 'crypto';

import { Hash } from '../../Entity/Hash';
import { ICreateHash } from '../../Type/Command/Driver/ICreateHash';
import { ICreateNewHash } from '../../Type/Command/Driver/ICreateNewHash';
import { IHashDriver } from '../IHashDriver';

class Crypto implements IHashDriver {
  public async createHash(command: ICreateHash): Promise<Hash> {
    const value = this.generateHashValue(command.Email, command.Salt, command.Password);
    const hash = Hash.create(command.Salt, value);

    return hash;
  }

  public async createNewHash(command: ICreateNewHash): Promise<Hash> {
    const salt = this.generateRandomString();
    const value = this.generateHashValue(command.Email, salt, command.Password);
    const hash = Hash.create(salt, value);

    return hash;
  }

  private generateHashValue(email: string, salt: string, password: string): string {
    const hmac = crypto.createHmac('sha512', salt);

    hmac.update(email + password);

    return hmac.digest('hex');
  }

  private generateRandomString(): string {
    const length = 32;

    return crypto
      .randomBytes(length)
      .toString('hex')
      .slice(length);
  }
}

export { Crypto };
