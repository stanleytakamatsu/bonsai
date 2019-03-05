import { IGenerateCredential } from './IGenerateCredential';

class GenerateCredential implements IGenerateCredential {
  private email: string;
  private password: string;
  private salt: string;

  public get Salt(): string {
    return this.salt;
  }

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(email: string, password: string, salt: string): GenerateCredential {
    const command = new GenerateCredential();

    command.email = email;
    command.salt = salt;
    command.password = password;

    return command;
  }
}

export { GenerateCredential };
