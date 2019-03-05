import { BlankTracer } from '../BlankTracer';

class BlankDriverFactory {
  public static async create(): Promise<BlankTracer> {
    return new BlankTracer();
  }
}

export { BlankDriverFactory };
