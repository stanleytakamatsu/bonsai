import { TLoggingLevels } from '../../TLoggingLevel';

interface IWinstonConfiguration {
  logLevel: TLoggingLevels;
  consoleLogEnabled: boolean;
  combinedFileLogEnabled: boolean;
  errorFileLogEnabled: boolean;
}

const IWinstonConfiguration = Symbol.for('IWinstonConfiguration');

export { IWinstonConfiguration };
