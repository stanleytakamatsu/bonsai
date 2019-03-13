import { IContainerService } from '../../Core/Container/IContainerService';
import { IProvider } from '../../Core/Provider/IProvider';
import { ISignUpController } from '../Controller/ISignUpController';
import { SignUpController } from '../Controller/SignUpController';
import { IUserSignUp } from '../UseCase/IUserSignUp';
import { IUserSignUpValidator } from '../Validator/IUserSignUpValidator';

class AccountControllerProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUpController();
  }

  private async registerSignUpController(): Promise<void> {
    const promisedController = new Promise<ISignUpController>(async resolve => {
      const validator = await this.container.get<IUserSignUpValidator>(IUserSignUpValidator);
      const userSignUp = await this.container.get<IUserSignUp>(IUserSignUp);
      const controller = new SignUpController(userSignUp, validator);

      resolve(controller);
    });

    await this.container.register<ISignUpController>(ISignUpController, promisedController);
  }
}

export { AccountControllerProvider };
