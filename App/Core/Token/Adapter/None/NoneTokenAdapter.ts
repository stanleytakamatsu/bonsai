import { ITokenAdapter } from '../../ITokenAdapter';
import { IGenerateTokenCommand } from '../../Type/Command/IGenerateTokenCommand';
import { Token } from '../Entity/Token';

class NoneTokenAdapter implements ITokenAdapter {
  public async verify(_token: string): Promise<void> {
    return new Promise(resolve => {
      resolve();
    });
  }

  public async generate(_command: IGenerateTokenCommand): Promise<Token> {
    return new Promise(resolve => {
      resolve(Token.create(''));
    });
  }
}

export { NoneTokenAdapter };
