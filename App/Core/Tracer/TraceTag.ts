class TraceTag {
  public constructor(private readonly name: string, private readonly value: any) {}

  public get Name(): string {
    return this.name;
  }

  public get Value(): any {
    return this.value;
  }
}

export { TraceTag };
