import { ISchemaValidator } from '../../Core/Validator/Interface/ISchemaValidator';
import { IUserSignUpParamter } from '../Tyoe/Parameter/IUserSignUpParamter';

interface IUserSignUpValidator extends ISchemaValidator<IUserSignUpParamter> {}

const IUserSignUpValidator = Symbol.for('IUserSignUpValidator');

export { IUserSignUpValidator };
