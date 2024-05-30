import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class CheckEmailExistMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { email } = req.body;

    const user = await this.Service.UserServices.GetUserByEmail.call(email);

    if (user) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.EMAIL_ALREADY_EXIT_MSG
      );
    }

    return next();
  }
}

export default CheckEmailExistMiddleware;
