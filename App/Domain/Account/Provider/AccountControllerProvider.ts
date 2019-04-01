import { IContainerService } from '../../../Core/Container/IContainerService';
import { IProvider } from '../../../Core/Provider/IProvider';
import { ISignInController } from '../Controller/ISignInController';
import { ISignUpController } from '../Controller/ISignUpController';
import { SignInController } from '../Controller/SignInController';
import { SignUpController } from '../Controller/SignUpController';
import { IUserSignIn } from '../UseCase/IUserSignIn';
import { IUserSignUp } from '../UseCase/IUserSignUp';
import { IUserSignInValidator } from '../Validator/IUserSignInValidator';
import { IUserSignUpValidator } from '../Validator/IUserSignUpValidator';

class AccountControllerProvider implements IProvider {
  public constructor(private readonly container: IContainerService) {}

  public async register(): Promise<void> {
    await this.registerSignUpController();
    await this.registerSignInController();
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

  private async registerSignInController(): Promise<void> {
    const promisedController = new Promise<ISignInController>(async resolve => {
      const validator = await this.container.get<IUserSignInValidator>(IUserSignInValidator);
      const userSignIn = await this.container.get<IUserSignIn>(IUserSignIn);
      const controller = new SignInController(userSignIn, validator);

      resolve(controller);
    });

    await this.container.register<ISignInController>(ISignInController, promisedController);
  }
}

export { AccountControllerProvider };
