import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class CreatePostValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      title: this.joi.string().required(),
      description: this.joi.string().required(),
      category: this.joi.string().required(),
      image_url: this.joi.string().optional(),
      image_id: this.joi.string().optional(),
    });

    this.bodyHandler(req, res, schema, next);
  }
}

export default CreatePostValidator;
