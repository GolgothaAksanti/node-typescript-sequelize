import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';
import Util from '@src/core/utils';
import { IUserSignin } from '@src/types/user.type';

class UserSigninController extends BaseController {
  protected async module(req: Request, res: Response): Promise<void | any> {
    const body: IUserSignin = req.body;

    const user = await this.Service.UserServices.UserSignin.call(body);

    if (!user) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    const data = Util.removeProperties(user, ['password', 'salt']);

    const token = await Util.Token.generate(data);

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG, {
      token,
      data,
    });
  }
}

export default UserSigninController;
