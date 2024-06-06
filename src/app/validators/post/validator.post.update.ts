import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class UpdatePostValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      title: this.joi.string().optional(),
      description: this.joi.string().optional(),
      category: this.joi.string().optional(),
      image_url: this.joi.string().optional(),
      image_id: this.joi.string().optional(),
      status: this.joi.number().valid(1, 0).optional(),
    });

    this.bodyHandler(req, res, schema, next);
  }
}

export default UpdatePostValidator;
