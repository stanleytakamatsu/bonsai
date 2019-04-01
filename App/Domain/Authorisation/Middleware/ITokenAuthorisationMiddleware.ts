import { IHttpMiddleware } from '../../../Core/HttpServer/IHttpMiddleware';

interface ITokenAuthorisationMiddleware extends IHttpMiddleware {}

const ITokenAuthorisationMiddleware = Symbol.for('ITokenAuthorisationMiddleware');

export { ITokenAuthorisationMiddleware };
