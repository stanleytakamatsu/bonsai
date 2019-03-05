import { ICreateHash } from './ICreateHash';

class CreateHash implements ICreateHash {
  private email: string;
  private password: string;
  private salt: string;

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public get Salt(): string {
    return this.salt;
  }

  public static create(email: string, password: string, salt: string): CreateHash {
    const command = new CreateHash();

    command.email = email;
    command.password = password;
    command.salt = salt;

    return command;
  }
}

export { CreateHash };
