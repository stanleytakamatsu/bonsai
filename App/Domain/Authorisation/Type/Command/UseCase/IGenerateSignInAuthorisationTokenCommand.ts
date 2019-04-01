import { ISignInTokenPayload } from '../../Dto/ISignInTokenPayload';

interface IGenerateSignInAuthorisationTokenCommand {
  Payload: ISignInTokenPayload;
}

const IGenerateSignInAuthorisationTokenCommand = Symbol.for(
  'IGenerateSignInAuthorisationTokenCommand'
);

export { IGenerateSignInAuthorisationTokenCommand };
