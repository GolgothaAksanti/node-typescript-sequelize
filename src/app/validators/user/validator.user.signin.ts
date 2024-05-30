import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class UserSigninValidator extends BaseMiddleware {
  protected middleware(req: Request, res: Response, next: NextFunction): void {
    const schema = this.joi.object().keys({
      login: this.joi.string().required(),
      password: this.joi.string().min(6).required(),
    });

    this.bodyHandler(req, res, schema, next);
  }
}

export default UserSigninValidator;
