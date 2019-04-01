import { IFindAccountByEmailQuery } from './IFindAccountByEmailQuery';

class FindAccountByEmailQuery implements IFindAccountByEmailQuery {
  private email: string;

  public get Email(): string {
    return this.email;
  }

  public static create(email: string): FindAccountByEmailQuery {
    const command = new FindAccountByEmailQuery();

    command.email = email;

    return command;
  }
}

export { FindAccountByEmailQuery };
