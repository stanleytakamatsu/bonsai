interface ILoggerDriver {
  debug(message: string, metadata?: any): void;

  error(message: string, metadata?: any): void;

  info(message: string, metadata?: any): void;

  warning(message: string, metadata?: any): void;
}

const ILoggerDriver = Symbol.for('ILoggerDriver');

export { ILoggerDriver };
