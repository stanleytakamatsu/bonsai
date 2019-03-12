import { Account } from '../../../Entity/Account';

class CreateAccountCommand {
  private account: Account;

  public get Account(): Account {
    return this.account;
  }

  public static create(account: Account): CreateAccountCommand {
    const command = new CreateAccountCommand();

    command.account = account;

    return command;
  }
}

export { CreateAccountCommand };
