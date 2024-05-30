import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class UserSignupValidator extends BaseMiddleware {
  async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    const schema = this.joi.object().keys({
      username: this.joi.string().required(),
      fullname: this.joi.string().required(),
      email: this.joi
        .string()
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .email()
        .required(),
      password: this.joi.string().min(6).required(),
    });

    this.bodyHandler(req, res, schema, next);
  }
}

export default UserSignupValidator;
