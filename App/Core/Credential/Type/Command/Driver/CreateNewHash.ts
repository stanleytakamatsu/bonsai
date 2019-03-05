import { ICreateNewHash } from './ICreateNewHash';

class CreateNewHash implements ICreateNewHash {
  private email: string;
  private password: string;

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(email: string, password: string): CreateNewHash {
    const command = new CreateNewHash();

    command.email = email;
    command.password = password;

    return command;
  }
}

export { CreateNewHash };
