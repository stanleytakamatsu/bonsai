import { ITraceSpan } from '../ITraceSpan';

class BlankSpan implements ITraceSpan {
  // tslint:disable-next-line:no-empty
  public setTag(_name: string, _value: any): void {}

  // tslint:disable-next-line:no-empty
  public addTags(_tags: { [key: string]: string }): void {}

  // tslint:disable-next-line:no-empty
  public finish(): void {}

  public createChildSpan(_name: string): ITraceSpan {
    return new BlankSpan();
  }
}

export { BlankSpan };
