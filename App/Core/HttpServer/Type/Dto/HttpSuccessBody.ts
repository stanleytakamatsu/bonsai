class HttpBody {
  public constructor(private readonly data: any) {}

  public get Data(): any {
    return this.data;
  }
}

export { HttpBody };
