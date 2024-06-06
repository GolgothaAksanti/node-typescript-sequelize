import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';

class GetPostController extends BaseController {
  protected async module(req: Request, res: Response): Promise<void | any> {
    const postId: string = req.params.postId;

    const data = await this.Service.PostServices.GetOnePost.call(postId);

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

export default GetPostController;
