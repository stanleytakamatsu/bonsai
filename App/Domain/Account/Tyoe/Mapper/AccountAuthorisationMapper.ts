import { serialize } from 'cerialize';

import { AccountAuthorisation } from '../Dto/AccountAuthorisation';

class AccountAuthorisationMapper {
  private accountId: string;
  private token: string;
  private expirationDate: string;

  @serialize
  public get AccountId(): string {
    return this.accountId;
  }

  @serialize
  public get Token(): string {
    return this.token;
  }

  @serialize
  public get ExpirationDate(): string {
    return this.expirationDate;
  }

  public static create(accountAuthorisation: AccountAuthorisation): AccountAuthorisationMapper {
    const mapper = new AccountAuthorisationMapper();

    mapper.accountId = accountAuthorisation.AccountId;
    mapper.token = accountAuthorisation.Token;
    mapper.expirationDate = accountAuthorisation.ExpirationDate.format();

    return mapper;
  }
}

export { AccountAuthorisationMapper };
