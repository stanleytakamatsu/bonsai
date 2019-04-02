import { GenerateCredential } from '../../../Core/Credential/Type/Command/UseCase/GenerateCredential';
import { IGenerateUserCredentialFromExistingSalt } from '../../../Core/Credential/UseCase/IGenerateUserCredentialFromExistingSalt';
import { ILogger } from '../../../Core/Logger/ILogger';
import { GenerateSignInAuthorisationTokenCommand } from '../../Authorisation/Type/Command/UseCase/GenerateSignInAuthorisationTokenCommand';
import { IGenerateSignInAuthorisationToken } from '../../Authorisation/UseCase/IGenerateSignInAuthorisationToken';
import { Account } from '../Entity/Account';
import { IAccountFinderService } from '../Service/IAccountFinderService';
import { IUserSignUpCommand } from '../Tyoe/Command/UseCase/IUserSignUpCommand';
import { AccountAuthorisation } from '../Tyoe/Dto/AccountAuthorisation';
import { AccountNotFoundError } from '../Tyoe/Error/Service/AccountNotFoundError';
import { InvalidCredentialsError } from '../Tyoe/Error/UseCase/InvalidCredentialsError';
import { SignUpGenericError } from '../Tyoe/Error/UseCase/SignUpGenericError';
import { FindAccountByEmailQuery } from '../Tyoe/Query/Service/FindAccountByEmailQuery';

import { IUserSignIn } from './IUserSignIn';

class UserSignIn implements IUserSignIn {
  public constructor(
    private readonly finderService: IAccountFinderService,
    private readonly generateCredential: IGenerateUserCredentialFromExistingSalt,
    private readonly tokenGenerator: IGenerateSignInAuthorisationToken,
    private readonly logger: ILogger
  ) {}

  public async execute(command: IUserSignUpCommand): Promise<AccountAuthorisation> {
    let account: Account;

    try {
      const findAccountQuery = FindAccountByEmailQuery.create(command.Email);

      account = await this.finderService.findByEmail(findAccountQuery);
    } catch (error) {
      this.throwSpecificErrorBasedOn(error);
    }

    await this.validateCredentials(account, command.Email, command.Password, account.Salt);

    const tokenGenerateCommand = GenerateSignInAuthorisationTokenCommand.create(account.Guid);

    const token = await this.tokenGenerator.execute(tokenGenerateCommand);

    return AccountAuthorisation.create(account.Guid, token);
  }

  private async validateCredentials(
    account: Account,
    email: string,
    password: string,
    salt: string
  ): Promise<void> {
    const command = GenerateCredential.create(email, password, salt);
    const credential = await this.generateCredential.execute(command);

    if (account.Password !== credential.Hash) {
      throw new InvalidCredentialsError();
    }
  }

  private throwSpecificErrorBasedOn(error: Error): void {
    switch (error.constructor) {
      case AccountNotFoundError:
        this.logger.warning(error.message, error);

        throw new InvalidCredentialsError();
      default:
        this.logger.error(error.message, error);

        throw new SignUpGenericError(error);
    }
  }
}

export { UserSignIn };
