import * as moment from 'moment-timezone';

async function momentInit(timezone: string): Promise<void> {
  moment.tz.setDefault(timezone);
}

export { momentInit };
