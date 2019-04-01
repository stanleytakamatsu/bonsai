import { ICreateAccountCommand } from '../Tyoe/Command/Service/ICreateAccountCommand';

interface IAccountCreatorService {
  create(command: ICreateAccountCommand): Promise<void>;
}

const IAccountCreatorService = Symbol.for('IAccountCreatorService');

export { IAccountCreatorService };
