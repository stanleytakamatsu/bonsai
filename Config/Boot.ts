import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { Application } from './Application';
import { Environments } from './Environments';

if (
  [Environments.DEVELOPMENT, Environments.TEST].indexOf(process.env.NODE_ENV as Environments) > -1
) {
  let commomFile = '.env';

  if (!fs.existsSync(commomFile)) {
    commomFile = `${commomFile}.dist`;
  }

  dotenv.config({ path: commomFile });
}

const application: Application = new Application();

export { application };
