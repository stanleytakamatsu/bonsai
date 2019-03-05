import { IVerifyAuthorisationTokenCommand } from './IVerifyAuthorisationTokenCommand';

class VerifyAuthorisationTokenCommand implements IVerifyAuthorisationTokenCommand {
  public constructor(private readonly token: string) {}

  public get Token(): string {
    return this.token;
  }
}

export { VerifyAuthorisationTokenCommand };
