import { GenerateNewCredential } from '../../Core/Credential/Type/Command/UseCase/GenerateNewCredential';
import { IGenerateNewUserCredential } from '../../Core/Credential/UseCase/IGenerateNewUserCredential';
import { ILogger } from '../../Core/Logger/ILogger';
import { Account } from '../Entity/Account';
import { IAccountCreatorService } from '../Service/IAccountCreatorService';
import { CreateAccountCommand } from '../Tyoe/Command/Service/CreateAccountCommand';
import { IUserSignUpCommand } from '../Tyoe/Command/UseCase/IUserSignUpCommand';
import { AlreadyAccountExists as ServiceError } from '../Tyoe/Error/Service/AlreadyAccountExists';
import { CreateAccountGenericError } from '../Tyoe/Error/Service/CreateAccountGenericError';
import { AlreadyAccountExists } from '../Tyoe/Error/UseCase/AlreadyAccountExists';
import { SignUpGenericError } from '../Tyoe/Error/UseCase/SignUpGenericError';

import { IUserSignUp } from './IUserSignUp';

class UserSignUp implements IUserSignUp {
  public constructor(
    private readonly creatorService: IAccountCreatorService,
    private readonly generateNewCredential: IGenerateNewUserCredential,
    private readonly logger: ILogger
  ) {}

  public async execute(command: IUserSignUpCommand): Promise<void> {
    try {
      const createCommand = await this.createAccountCommand(command.Email, command.Password);

      await this.creatorService.create(createCommand);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error, command.Email);
    }
  }

  private async createAccountCommand(
    email: string,
    password: string
  ): Promise<CreateAccountCommand> {
    const command = GenerateNewCredential.create(email, password);
    const credential = await this.generateNewCredential.execute(command);

    const account = Account.create(credential.Email, credential.Hash, credential.Salt);

    return CreateAccountCommand.create(account);
  }

  private throwSpecificErrorBasedOn(error: Error, email: string): void {
    switch (error.constructor) {
      case ServiceError:
        throw new AlreadyAccountExists(email);
      case CreateAccountGenericError:
        const serviceError = error as CreateAccountGenericError;
        const originalError = serviceError.OriginalError;

        this.logger.error(error.message, error);

        throw new SignUpGenericError(originalError);
      default:
        this.logger.error(error.message, error);

        throw new SignUpGenericError(error);
    }
  }
}

export { UserSignUp };
