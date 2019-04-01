import { IGenerateTokenCommand } from '../../../../Core/Token/Type/Command/IGenerateTokenCommand';
import { IPayload } from '../Dto/IPayload';

class GenerateTokenCommand implements IGenerateTokenCommand {
  private payload: IPayload;

  public get Payload(): IPayload {
    return this.payload;
  }

  public static create(payload: IPayload): GenerateTokenCommand {
    const command = new GenerateTokenCommand();

    command.payload = payload;

    return command;
  }
}

export { GenerateTokenCommand };
