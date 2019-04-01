import { IPayload } from '../Dto/IPayload';

interface IGenerateTokenCommand {
  readonly Payload: IPayload;
}

const IGenerateTokenCommand = Symbol.for('IGenerateTokenCommand');

export { IGenerateTokenCommand };
