class Credential {
  private email: string;
  private salt: string;
  private hash: string;

  public get Email(): string {
    return this.email;
  }

  public get Salt(): string {
    return this.salt;
  }

  public get Hash(): string {
    return this.hash;
  }

  public static create(email: string, salt: string, randomHash: string): Credential {
    const newHash = new Credential();

    newHash.salt = salt;
    newHash.email = email;
    newHash.hash = randomHash;

    return newHash;
  }
}

export { Credential };
