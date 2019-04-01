class Token {
  private value: string;

  public get Value(): string {
    return this.value;
  }

  public static create(value: string): Token {
    const token = new Token();

    token.value = value;

    return token;
  }
}

export { Token };
