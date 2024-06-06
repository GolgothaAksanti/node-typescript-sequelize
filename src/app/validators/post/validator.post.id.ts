import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class PostIdValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      postId: this.joi.string().required(),
    });

    this.paramsHandler(req, res, schema, next);
  }
}

export default PostIdValidator;
