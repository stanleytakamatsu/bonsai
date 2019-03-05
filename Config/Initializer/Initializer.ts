import { IApplicationConfiguration } from '../IApplicationConfiguration';

import { momentInit } from './Moment';

async function init(configuration: IApplicationConfiguration): Promise<void> {
  await momentInit(configuration.timezone());
}

export { init };
