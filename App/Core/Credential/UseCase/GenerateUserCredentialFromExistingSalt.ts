import { IHashDriver } from '../Driver/IHashDriver';
import { Credential } from '../Entity/Credential';
import { CreateHash } from '../Type/Command/Driver/CreateHash';
import { IGenerateCredential } from '../Type/Command/UseCase/IGenerateCredential';

import { IGenerateUserCredentialFromExistingSalt } from './IGenerateUserCredentialFromExistingSalt';

class GenerateUserCredentialFromExistingSalt implements IGenerateUserCredentialFromExistingSalt {
  public constructor(private readonly hashDriver: IHashDriver) {}

  public async execute(command: IGenerateCredential): Promise<Credential> {
    const hashCommand = CreateHash.create(command.Email, command.Password, command.Salt);
    const hash = await this.hashDriver.createNewHash(hashCommand);
    const credential = Credential.create(command.Password, hash.Salt, hash.Value);

    return credential;
  }
}

export { GenerateUserCredentialFromExistingSalt };
