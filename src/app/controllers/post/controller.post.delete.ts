import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';

class DeletePostController extends BaseController {
  protected async module(req: Request, res: Response): Promise<void | any> {
    const postId: string = req.params.postId;

    const isLdeleted = await this.Service.PostServices.DeletePost.call(postId);

    if (!isLdeleted) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG);
  }
}

export default DeletePostController;
