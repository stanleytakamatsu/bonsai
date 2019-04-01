import { Credential } from '../Entity/Credential';
import { IGenerateCredential } from '../Type/Command/UseCase/IGenerateCredential';

interface IGenerateUserCredentialFromExistingSalt {
  execute(command: IGenerateCredential): Promise<Credential>;
}

const IGenerateUserCredentialFromExistingSalt = Symbol.for(
  'IGenerateUserCredentialFromExistingSalt'
);

export { IGenerateUserCredentialFromExistingSalt };
