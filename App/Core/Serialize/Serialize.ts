import { Serialize as ExecuteSerialize, SerializeKeysTo, SnakeCase } from 'cerialize';

import { ISerialize } from './ISerialize';

SerializeKeysTo(SnakeCase);

abstract class Serialize implements ISerialize {
  public serialize(data: any): any {
    return ExecuteSerialize(data);
  }
}

export { Serialize };
