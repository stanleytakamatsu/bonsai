import { v4 } from 'uuid';

class GuidGenerator {
  public static generate(): string {
    return v4();
  }
}

export { GuidGenerator };
