import { AuthorisationMiddlewareProvider } from '../App/Authorisation/Provider/AuthorisationMiddlewareProvider';
import { AuthorisationServiceProvider } from '../App/Authorisation/Provider/AuthorisationServiceProvider';
import { AuthorisationUseCaseProvider } from '../App/Authorisation/Provider/AuthorisationUseCaseProvider';
import { IContainerRegistry } from '../App/Core/Container/IContainerRegistry';
import { IContainerService } from '../App/Core/Container/IContainerService';
import { MongooseProvider } from '../App/Core/Database/Driver/Mongoose/Provider/MongooseProvider';
import { HttpServerProvider } from '../App/Core/HttpServer/Provider/HttpServerProvider';
import { INewable } from '../App/Core/Interface/INewable';
import { LoggerProvider } from '../App/Core/Logger/Provider/LoggerProvider';
import { IProvider } from '../App/Core/Provider/IProvider';
import { TracerProvider } from '../App/Core/Tracer/Provider/TracerProvider';
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
    AuthorisationMiddlewareProvider
  ];

  public constructor(private readonly container: IContainerService) {}

  public async registerAll(): Promise<void> {
    const providersCount = ContainerRegistry.REGISTERED_PROVIDERS.length;

    for (let i = 0; i < providersCount; i += 1) {
      void this.registerProvider(ContainerRegistry.REGISTERED_PROVIDERS[i]);
    }
  }

  public async registerProvider(newableProvider: INewable<IProvider>): Promise<any> {
    const provider: IProvider = new newableProvider(this.container);

    void provider.register();
  }
}

export { ContainerRegistry };
