import { ContainerFactory } from '../App/Core/Container/Factory/ContainerFactory';
import { IContainerService } from '../App/Core/Container/IContainerService';
import { Strategies as ContainerStrategies } from '../App/Core/Container/Strategies';
import { IHttpServer } from '../App/Core/HttpServer/IHttpServer';
import { RouteRegistry } from '../App/Routes/RouteRegistry';

import { ApplicationConfiguration } from './ApplicationConfiguration';
import { ContainerRegistry } from './ContainerRegistry';
import { IApplicationConfiguration } from './IApplicationConfiguration';
import * as initlialize from './Initializer/Initializer';

class Application {
  private container: IContainerService;

  private readonly configuration: IApplicationConfiguration;

  public constructor() {
    this.configuration = new ApplicationConfiguration();
  }

  public async bootstrap(): Promise<void> {
    await this.initializer();
    await this.configureContainers();
    await this.configureRoutes();
  }

  public async initializer(): Promise<void> {
    await initlialize.init(this.configuration);
  }

  public async runServer(): Promise<void> {
    const server: IHttpServer = await this.container.get<Promise<IHttpServer>>(IHttpServer);
    const httpConfiguration: any = this.configuration.httpServerConfigurations();

    await server.start(httpConfiguration.port);
  }

  private async configureContainers(): Promise<void> {
    this.container = await ContainerFactory.create(ContainerStrategies.INVERSIFY);
    const promisedConfig = new Promise<IApplicationConfiguration>(async resolve => {
      resolve(this.configuration);
    });

    void this.container.register<IApplicationConfiguration>(
      IApplicationConfiguration,
      promisedConfig
    );

    const containerRegistry: ContainerRegistry = new ContainerRegistry(this.container);

    await containerRegistry.registerAll();
  }

  private async configureRoutes(): Promise<void> {
    const routeRegistry: RouteRegistry = new RouteRegistry(this.container);

    await routeRegistry.registerAll();
  }
}

export { Application };
