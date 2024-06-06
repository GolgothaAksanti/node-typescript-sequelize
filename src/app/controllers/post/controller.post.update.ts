import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';
import { PostAttributes } from '@src/database/models/Post';

class UpdatePostController extends BaseController {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | any> {
    const post: PostAttributes = req.body;
    const postId: string = req.params.postId;

    const isUpdated = await this.Service.PostServices.UpdatePost.call({
      post,
      postId,
    });

    if (!isUpdated[0]) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.BAD_REQUEST_MSG
      );
    }

    return this.responseHandler(res, this.SUCCESS_CODE, this.SUCCESS_MSG);
  }
}

export default UpdatePostController;
