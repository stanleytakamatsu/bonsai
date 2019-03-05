import { IHashDriver } from '../Driver/IHashDriver';
import { Credential } from '../Entity/Credential';
import { CreateNewHash } from '../Type/Command/Driver/CreateNewHash';
import { IGenerateNewCredential } from '../Type/Command/UseCase/IGenerateNewCredential';

import { IGenerateNewUserCredential } from './IGenerateNewUserCredential';

class GenerateNewUserCredential implements IGenerateNewUserCredential {
  public constructor(private readonly hashDriver: IHashDriver) {}

  public async execute(command: IGenerateNewCredential): Promise<Credential> {
    const hashCommand = CreateNewHash.create(command.Email, command.Password);
    const hash = await this.hashDriver.createNewHash(hashCommand);
    const credential = Credential.create(command.Password, hash.Salt, hash.Value);

    return credential;
  }
}

export { GenerateNewUserCredential };
