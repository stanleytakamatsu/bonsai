import { IUserSignInCommand } from './IUserSignInCommand';

class UserSignInCommand implements IUserSignInCommand {
  private email: string;

  private password: string;

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(email: string, password: string): UserSignInCommand {
    const command = new UserSignInCommand();

    command.email = email;
    command.password = password;

    return command;
  }
}

export { UserSignInCommand };
