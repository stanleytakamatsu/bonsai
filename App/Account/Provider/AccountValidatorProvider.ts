import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { JoiSchemaValidator } from '../../Core/Validator/Adapter/Joi/JoiSchemaValidator';
import { IUserSignUpParamter } from '../Tyoe/Parameter/IUserSignUpParamter';
import { IUserSignUpValidator } from '../Validator/IUserSignUpValidator';
import { UserSignUpSchema } from '../Validator/Schema/Joi/UserSignUpSchema';

class AccountValidatorProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUpValidator();
  }

  private async registerSignUpValidator(): Promise<void> {
    const promisedValidator = new Promise<IUserSignUpValidator>(async resolve => {
      const validator = new JoiSchemaValidator<IUserSignUpParamter>(UserSignUpSchema);

      resolve(validator);
    });

    await this.container.register<IUserSignUpValidator>(IUserSignUpValidator, promisedValidator);
  }
}

export { AccountValidatorProvider };
