import { HealthStatus } from '../Type/Dto/HealthStatus';

interface IHealthStatusFactory {
  create(): HealthStatus;
}

const IHealthStatusFactory = Symbol.for('IHealthStatusFactory');

export { IHealthStatusFactory };
