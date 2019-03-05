interface ILogger {
  debug(message: string, metadata?: any): void;

  error(message: string, metadata?: any): void;

  info(message: string, metadata?: any): void;

  warning(message: string, metadata?: any): void;
}

const ILogger = Symbol.for('ILogger');

export { ILogger };
