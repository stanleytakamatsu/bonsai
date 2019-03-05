import { IWinstonConfiguration } from '../App/Core/Logger/Driver/Winston/IWinstonConfiguration';
import { TLoggingLevels } from '../App/Core/Logger/TLoggingLevel';

import { IApplicationConfiguration } from './IApplicationConfiguration';

class ApplicationConfiguration implements IApplicationConfiguration {
  public hashDriver(): string {
    return process.env.HASH_DRIVER;
  }

  public timezone(): string {
    return process.env.TZ;
  }

  public loggerDriver(): string {
    return process.env.LOGGER_DRIVER;
  }

  public tracerDriver(): string {
    return process.env.TRACER_DRIVER;
  }

  public httpServerConfigurations(): any {
    return { port: process.env.HTTP_SERVER_PORT, address: process.env.HTTP_SERVER_ADDRESS };
  }

  public databaseUrl(): string {
    return process.env.MONGO_DATABASE_URL;
  }

  public logLevel(): string {
    return process.env.LOG_LEVEL;
  }

  public winstonLogger(): IWinstonConfiguration {
    return {
      combinedFileLogEnabled: process.env.WINSTON_COMBINED_FILE_LOG_ENABLED === 'true',
      consoleLogEnabled: process.env.WINSTON_CONSOLE_LOG_ENABLED === 'true',
      errorFileLogEnabled: process.env.WINSTON_ERROR_FILE_LOG_ENABLED === 'true',
      logLevel: this.logLevel() as TLoggingLevels
    };
  }

  public authorisationTokenConfigurations(): any {
    return {
      authorisationTokenDriver: process.env.AUTHORISATION_TOKEN_DRIVER,
      jwtSecretKey: process.env.JWT_SECRET_KEY
    };
  }
}

export { ApplicationConfiguration };
