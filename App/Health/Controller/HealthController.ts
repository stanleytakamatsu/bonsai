import { ActionController } from '../../Core/Controller/ActionController';
import { IHttpResponse } from '../../Core/HttpServer/IHttpResponse';
import { IHealthStatusFactory } from '../Factory/IHealthStatusFactory';

import { IHealthController } from './IHealthController';

class HealthController extends ActionController implements IHealthController {
  public constructor(private readonly healthStatusFactory: IHealthStatusFactory) {
    super();
  }

  public async perform(): Promise<IHttpResponse> {
    const status = this.healthStatusFactory.create();

    return this.createSuccessResponse(status.toMapper());
  }
}

export { HealthController };
