import * as Joi from 'joi';
import * as _ from 'lodash';

import { ConstraintViolatedError } from '../../../Error/Validator/ConstraintViolatedError';
import { ISchemaValidator } from '../../Interface/ISchemaValidator';

class JoiSchemaValidator<T> implements ISchemaValidator<T> {
  public constructor(private readonly schema: Joi.Schema) {}

  public validate(params: T): void {
    const result = Joi.validate<T>(params, this.schema, {
      abortEarly: false
    });

    if (result.error !== null) {
      throw new ConstraintViolatedError('Schema is invalid', result.error.details);
    }

    _.extend(params, result.value);
  }
}

export { JoiSchemaValidator };
