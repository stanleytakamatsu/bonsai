import { IUserSignUpCommand } from './IUserSignUpCommand';

class UserSignUpCommand implements IUserSignUpCommand {
  private email: string;

  private password: string;

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(email: string, password: string): UserSignUpCommand {
    const command = new UserSignUpCommand();

    command.email = email;
    command.password = password;

    return command;
  }
}

export { UserSignUpCommand };
