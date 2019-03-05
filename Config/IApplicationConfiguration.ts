import { IWinstonConfiguration } from '../App/Core/Logger/Driver/Winston/IWinstonConfiguration';

interface IApplicationConfiguration {
  timezone(): string;
  loggerDriver(): string;
  httpServerConfigurations(): any;
  logLevel(): string;
  winstonLogger(): IWinstonConfiguration;
  databaseUrl(): string;
  tracerDriver(): string;
  authorisationTokenConfigurations(): any;
}

const IApplicationConfiguration = Symbol.for('IApplicationConfiguration');

export { IApplicationConfiguration };
