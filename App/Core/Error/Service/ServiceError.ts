abstract class ServiceError extends Error {
  public readonly name: string;

  public readonly message: string;

  public readonly stack: string = new Error().stack;

  public constructor(message: string) {
    super();

    this.message = message;
    this.name = this.constructor.name;
  }

  public get Message(): string {
    return this.message;
  }

  public get Stack(): string {
    return this.stack;
  }
}

export { ServiceError };
