import { Credential } from '../Entity/Credential';
import { IGenerateNewCredential } from '../Type/Command/UseCase/IGenerateNewCredential';

interface IGenerateUserCredentialFromExistingSalt {
  execute(command: IGenerateNewCredential): Promise<Credential>;
}

const IGenerateUserCredentialFromExistingSalt = Symbol.for(
  'IGenerateUserCredentialFromExistingSalt'
);

export { IGenerateUserCredentialFromExistingSalt };
