import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';

class GetAllPostController extends BaseController {
  protected async module(req: Request, res: Response): Promise<void | any> {
    const data = await this.Service.PostServices.FindAllPost.call();

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

export default GetAllPostController;
