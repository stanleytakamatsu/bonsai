import { IActionController } from '../../Core/Controller/IActionController';

interface ISignUpController extends IActionController {}

const ISignUpController = Symbol.for('ISignUpController');

export { ISignUpController };
