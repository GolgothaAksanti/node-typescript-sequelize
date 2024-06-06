import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';
import { UserAttributes } from '@src/database/models/User';

class CreateUserController extends BaseController {
  protected async module(
    req: Request<any, any, UserAttributes>,
    res: Response
  ): Promise<void | any> {
    const body: UserAttributes = req.body;

    const user = await this.Service.UserServices.UserSignup.call(body);

    if (!user) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(res, this.CREATED_CODE, this.SUCCESS_MSG, user);
  }
}

export default CreateUserController;
