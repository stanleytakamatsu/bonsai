import { IGenerateNewCredential } from './IGenerateNewCredential';

class GenerateNewCredential implements IGenerateNewCredential {
  private email: string;
  private password: string;

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(email: string, password: string): GenerateNewCredential {
    const command = new GenerateNewCredential();

    command.email = email;
    command.password = password;

    return command;
  }
}

export { GenerateNewCredential };
