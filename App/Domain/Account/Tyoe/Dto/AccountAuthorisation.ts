import * as moment from 'moment';

import { AuthorisationToken } from '../../../Authorisation/Type/Dto/AuthorisationToken';

class AccountAuthorisation {
  private accountId: string;
  private token: string;
  private expirationDate: moment.Moment;

  public get AccountId(): string {
    return this.accountId;
  }

  public get Token(): string {
    return this.token;
  }

  public get ExpirationDate(): moment.Moment {
    return this.expirationDate;
  }

  public static create(accountId: string, token: AuthorisationToken): AccountAuthorisation {
    const account = new AccountAuthorisation();

    account.accountId = accountId;
    account.token = token.Value;
    account.expirationDate = token.ExpirationDate;

    return account;
  }
}

export { AccountAuthorisation };
