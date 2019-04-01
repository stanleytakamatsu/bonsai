import { IPayload } from '../../../Core/Token/Type/Dto/IPayload';

interface ISignInTokenPayload extends IPayload {
  userGuid: string;
}

const ISignInTokenPayload = Symbol.for('ISignInTokenPayload');

export { ISignInTokenPayload };
