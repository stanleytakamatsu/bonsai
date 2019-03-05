import { ITokenAdapter } from '../../ITokenAdapter';

class NoneTokenAdapter implements ITokenAdapter {
  public async verify(_token: string): Promise<void> {
    return new Promise((resolve) => {
      resolve();
    });
  }
} 

export { NoneTokenAdapter };
