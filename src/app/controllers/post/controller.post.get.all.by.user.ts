import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';

class GetAllPostByUserController extends BaseController {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | any> {
    const user = req.currentUser;


    const data = await this.Service.PostServices.FindAllPostByUser.call(
      user.userId
    );


    if (!data) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(
      res,
      this.SUCCESS_CODE,
      this.SUCCESS_MSG,

      data
    );
  }
}

export default GetAllPostByUserController;
