import { createLogger, Logger, transports } from 'winston';

import { ILoggerDriver } from '../ILoggerDriver';

import { IWinstonConfiguration } from './IWinstonConfiguration';

class Winston implements ILoggerDriver {
  private readonly logger: Logger;

  public constructor(private readonly configuration: IWinstonConfiguration) {
    this.logger = createLogger({
      transports: this.defaultTransportInstances()
    });

    this.logger.level = this.configuration.logLevel;
  }

  public debug(message: string, metadata?: any): void {
    this.logger.debug(message, metadata);
  }

  public info(message: string, metadata?: any): void {
    this.logger.info(message, metadata);
  }

  public warning(message: string, metadata?: any): void {
    this.logger.warn(message, metadata);
  }

  public error(message: string, metadata?: any): void {
    this.logger.error(message, metadata);
  }

  private defaultTransportInstances(): (
    | transports.ConsoleTransportInstance
    | transports.FileTransportInstance)[] {
    return [
      new transports.Console({
        silent: !this.configuration.consoleLogEnabled
      }),
      new transports.File({
        filename: 'log/combined.log',
        silent: !this.configuration.combinedFileLogEnabled
      }),
      new transports.File({
        filename: 'log/error.log',
        level: 'error',
        silent: !this.configuration.errorFileLogEnabled
      })
    ];
  }
}

export { Winston };
