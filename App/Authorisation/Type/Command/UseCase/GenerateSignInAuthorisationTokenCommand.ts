import * as moment from 'moment';

import { GuidGenerator } from '../../../../Core/Hash/Guid/GuidGenerator';
import { ISignInTokenPayload } from '../../Dto/ISignInTokenPayload';

import { IGenerateSignInAuthorisationTokenCommand } from './IGenerateSignInAuthorisationTokenCommand';

class GenerateSignInAuthorisationTokenCommand implements IGenerateSignInAuthorisationTokenCommand {
  private payload: ISignInTokenPayload;

  public get Payload(): ISignInTokenPayload {
    return this.payload;
  }

  public static create(userGuid: string): GenerateSignInAuthorisationTokenCommand {
    const command = new GenerateSignInAuthorisationTokenCommand();
    const exp = moment()
      .add('3 M')
      .toDate()
      .getTime();
    const iat = moment()
      .toDate()
      .getTime();
    const iss = 'dialogue-api';
    const jti = GuidGenerator.generate();
    const sub = 'dialogue-api login';

    command.payload = {
      exp,
      iat,
      iss,
      jti,
      sub,
      userGuid
    };

    return command;
  }
}

export { GenerateSignInAuthorisationTokenCommand };
