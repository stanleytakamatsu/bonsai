import { IApplicationConfiguration } from '../../../../Config/IApplicationConfiguration';

import { Crypto } from './Crypto/Crypto';
import { Drivers } from './Drivers';
import { IHashDriver } from './IHashDriver';

class DriverFactory {
  public static async create(configuration: IApplicationConfiguration): Promise<IHashDriver> {
    const driver = configuration.hashDriver();
    switch (driver) {
      case Drivers.CRYPTO:
        return new Crypto();
      default:
        return new Crypto();
    }
  }
}

export { DriverFactory };
