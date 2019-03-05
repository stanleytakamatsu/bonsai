import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { HealthStatus } from '../Type/Dto/HealthStatus';

import { IHealthStatusFactory } from './IHealthStatusFactory';

class HealthStatusFactory implements IHealthStatusFactory {
  public constructor(private readonly config: IApplicationConfiguration) {}
  public create(): HealthStatus {
    return new HealthStatus(this.config.timezone());
  }
}

export { HealthStatusFactory };
