import BaseController from '@src/core/base/controller';
import { Request } from 'express';

class CreateUserController extends BaseController {
  protected async module(
    req: Request,
    res: Response | any
  ): Promise<void | any> {
    const body = req.body;

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, body);
  }
}

export default CreateUserController;
