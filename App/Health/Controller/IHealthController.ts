import { IActionController } from '../../Core/Controller/IActionController';

interface IHealthController extends IActionController {}

const IHealthController = Symbol.for('IHealthController');

export { IHealthController };
