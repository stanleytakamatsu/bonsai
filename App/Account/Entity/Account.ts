import * as moment from 'moment-timezone';

import { GuidGenerator } from '../../Core/Hash/Guid/GuidGenerator';

class Account {
  private id: string;
  private guid: string;
  private email: string;
  private salt: string;
  private password: string;
  private createdAt: moment.Moment;
  private updatedAt: moment.Moment;

  public get Id(): string {
    return this.id;
  }

  public get Guid(): string {
    return this.guid;
  }

  public get Email(): string {
    return this.email;
  }

  public get Salt(): string {
    return this.salt;
  }

  public get Password(): string {
    return this.password;
  }

  public get CreatedAt(): moment.Moment {
    return this.createdAt;
  }

  public get UpdatedAt(): moment.Moment {
    return this.updatedAt;
  }

  public static create(email: string, password: string, salt: string): Account {
    const account = new Account();

    account.guid = GuidGenerator.generate();
    account.email = email;
    account.password = password;
    account.salt = salt;
    account.createdAt = moment();
    account.updatedAt = moment();

    return account;
  }
}

export { Account };
