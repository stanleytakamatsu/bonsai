import * as moment from 'moment-timezone';

import { HealthStatusMapper } from '../Mapper/HealthStatusMapper';

class HealthStatus {
  private readonly status: string = 'running';

  private readonly serverTime = moment();

  public constructor(private readonly timezone: string) {}

  public get Status(): string {
    return this.status;
  }

  public get ServerTime(): string {
    return this.serverTime.format();
  }

  public get Timezone(): string {
    return this.timezone;
  }

  public toMapper(): HealthStatusMapper {
    return new HealthStatusMapper(this);
  }
}

export { HealthStatus };
