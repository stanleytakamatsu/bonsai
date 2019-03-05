class Hash {
  private salt: string;
  private value: string;

  public get Salt(): string {
    return this.salt;
  }

  public get Value(): string {
    return this.value;
  }

  public static create(salt: string, value: string): Hash {
    const newHash = new Hash();

    newHash.salt = salt;
    newHash.value = value;

    return newHash;
  }
}

export { Hash };
