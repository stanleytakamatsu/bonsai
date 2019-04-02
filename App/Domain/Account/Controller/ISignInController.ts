import { IActionController } from '../../../Core/Controller/IActionController';

interface ISignInController extends IActionController {}

const ISignInController = Symbol.for('ISignInController');

export { ISignInController };
