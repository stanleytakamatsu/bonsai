import { IContainerRegistry } from '../App/Core/Container/IContainerRegistry';
import { IContainerService } from '../App/Core/Container/IContainerService';
import { CredentialDriverProvider } from '../App/Core/Credential/Provider/CredentialDriverProvider';
import { CredentialUseCaseProvider } from '../App/Core/Credential/Provider/CredentialUseCaseProvider';
import { MongooseProvider } from '../App/Core/Database/Driver/Mongoose/Provider/MongooseProvider';
import { HttpServerProvider } from '../App/Core/HttpServer/Provider/HttpServerProvider';
import { INewable } from '../App/Core/Interface/INewable';
import { LoggerProvider } from '../App/Core/Logger/Provider/LoggerProvider';
import { IProvider } from '../App/Core/Provider/IProvider';
import { TracerProvider } from '../App/Core/Tracer/Provider/TracerProvider';
import { AccountControllerProvider } from '../App/Domain/Account/Provider/AccountControllerProvider';
import { AccountRepositoryProvider } from '../App/Domain/Account/Provider/AccountRepositoryProvider';
import { AccountServiceProvider } from '../App/Domain/Account/Provider/AccountServiceProvider';
import { AccountUseCaseProvider } from '../App/Domain/Account/Provider/AccountUseCaseProvider';
import { AccountValidatorProvider } from '../App/Domain/Account/Provider/AccountValidatorProvider';
import { AuthorisationMiddlewareProvider } from '../App/Domain/Authorisation/Provider/AuthorisationMiddlewareProvider';
import { AuthorisationServiceProvider } from '../App/Domain/Authorisation/Provider/AuthorisationServiceProvider';
import { AuthorisationUseCaseProvider } from '../App/Domain/Authorisation/Provider/AuthorisationUseCaseProvider';
import { HealthProvider } from '../App/Health/Provider/HealthProvider';

class ContainerRegistry implements IContainerRegistry {
  private static readonly REGISTERED_PROVIDERS: INewable<IProvider>[] = [
    TracerProvider,
    LoggerProvider,
    HttpServerProvider,
    HealthProvider,
    MongooseProvider,
    AuthorisationServiceProvider,
    AuthorisationUseCaseProvider,
    AuthorisationMiddlewareProvider,
    CredentialDriverProvider,
    CredentialUseCaseProvider,
    AccountValidatorProvider,
    AccountRepositoryProvider,
    AccountServiceProvider,
    AccountUseCaseProvider,
    AccountControllerProvider
  ];

  public constructor(private readonly container: IContainerService) {}

  public async registerAll(): Promise<void> {
    const providersCount = ContainerRegistry.REGISTERED_PROVIDERS.length;

    for (let i = 0; i < providersCount; i += 1) {
      await this.registerProvider(ContainerRegistry.REGISTERED_PROVIDERS[i]);
    }
  }

  public async registerProvider(newableProvider: INewable<IProvider>): Promise<any> {
    const provider: IProvider = new newableProvider(this.container);

    await provider.register();
  }
}

export { ContainerRegistry };
