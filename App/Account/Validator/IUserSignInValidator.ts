import { ISchemaValidator } from '../../Core/Validator/Interface/ISchemaValidator';
import { IUserSignInParamter } from '../Tyoe/Parameter/IUserSignInParamter';

interface IUserSignInValidator extends ISchemaValidator<IUserSignInParamter> {}

const IUserSignInValidator = Symbol.for('IUserSignInValidator');

export { IUserSignInValidator };
