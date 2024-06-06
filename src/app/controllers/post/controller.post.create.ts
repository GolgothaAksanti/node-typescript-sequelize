import { Request, Response } from 'express';

import BaseController from '@src/core/base/controller';
import { PostAttributes } from '@src/database/models/Post';

class CreatePostController extends BaseController {
  protected async module(
    req: Request | any,
    res: Response
  ): Promise<void | any> {
    const user = req.currentUser;
    const body: PostAttributes = req.body;

    const data = await this.Service.PostServices.CreatePost.call({
      ...body,
      userId: user.userId,
    });

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

export default CreatePostController;
