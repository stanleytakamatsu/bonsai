import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { JoiSchemaValidator } from '../../Core/Validator/Adapter/Joi/JoiSchemaValidator';
import { IUserSignInParamter } from '../Tyoe/Parameter/IUserSignInParamter';
import { IUserSignUpParamter } from '../Tyoe/Parameter/IUserSignUpParamter';
import { IUserSignInValidator } from '../Validator/IUserSignInValidator';
import { IUserSignUpValidator } from '../Validator/IUserSignUpValidator';
import { UserSignInSchema } from '../Validator/Schema/Joi/UserSignInSchema';
import { UserSignUpSchema } from '../Validator/Schema/Joi/UserSignUpSchema';

class AccountValidatorProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUpValidator();
    await this.registerSignInValidator();
  }

  private async registerSignUpValidator(): Promise<void> {
    const promisedValidator = new Promise<IUserSignUpValidator>(async resolve => {
      const validator = new JoiSchemaValidator<IUserSignUpParamter>(UserSignUpSchema);

      resolve(validator);
    });

    await this.container.register<IUserSignUpValidator>(IUserSignUpValidator, promisedValidator);
  }

  private async registerSignInValidator(): Promise<void> {
    const promisedValidator = new Promise<IUserSignInValidator>(async resolve => {
      const validator = new JoiSchemaValidator<IUserSignInParamter>(UserSignInSchema);

      resolve(validator);
    });

    await this.container.register<IUserSignInValidator>(IUserSignInValidator, promisedValidator);
  }
}

export { AccountValidatorProvider };
