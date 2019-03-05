import * as BootOption from 'commander';

import { application } from './Boot';

(async () => {
  await application.bootstrap();

  BootOption.option('--server', 'Start webserver').parse(process.argv);

  if (BootOption.server) {
    await application.runServer();

    return;
  }
})()
  .then()
  .catch(error => {
    console.error(error);
  });
