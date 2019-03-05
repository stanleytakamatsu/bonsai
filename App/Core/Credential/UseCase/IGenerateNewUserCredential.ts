import { Credential } from '../Entity/Credential';
import { IGenerateNewCredential } from '../Type/Command/UseCase/IGenerateNewCredential';

interface IGenerateNewUserCredential {
  execute(command: IGenerateNewCredential): Promise<Credential>;
}

const IGenerateNewUserCredential = Symbol.for('IGenerateNewUserCredential');

export { IGenerateNewUserCredential };
