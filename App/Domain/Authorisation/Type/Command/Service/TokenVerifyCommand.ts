class TokenVerifyCommand {
  public constructor(
    private readonly token: string
  ) {}

  public get Token(): string {
    return this.token;
  }
}

export { TokenVerifyCommand };
