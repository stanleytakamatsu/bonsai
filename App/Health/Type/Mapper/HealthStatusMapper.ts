import { serialize } from 'cerialize';

import { HealthStatus } from '../Dto/HealthStatus';

class HealthStatusMapper {
  private readonly status: string;
  private readonly serverTime: string;
  private readonly timezone: string;

  public constructor(healthStatus: HealthStatus) {
    this.status = healthStatus.Status;
    this.serverTime = healthStatus.ServerTime;
    this.timezone = healthStatus.Timezone;
  }

  @serialize
  public get Status(): string {
    return this.status;
  }

  @serialize
  public get ServerTime(): string {
    return this.serverTime;
  }

  @serialize
  public get Timezone(): string {
    return this.timezone;
  }
}

export { HealthStatusMapper };
