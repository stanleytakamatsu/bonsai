interface ISchemaValidator<T> {
  validate(params: T): void;
}

export { ISchemaValidator };
