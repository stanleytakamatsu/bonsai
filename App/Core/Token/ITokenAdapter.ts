import { Token } from './Adapter/Entity/Token';
import { IGenerateTokenCommand } from './Type/Command/IGenerateTokenCommand';

interface ITokenAdapter {
  verify(token: string): Promise<void>;
  generate(command: IGenerateTokenCommand): Promise<Token>;
}

export { ITokenAdapter };
