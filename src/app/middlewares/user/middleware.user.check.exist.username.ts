import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';

class CheckUsernameExistMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { username } = req.body;
    const user =
      await this.Service.UserServices.GetUserByUsername.call(username);

    if (user) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.USERNAME_ALREADY_EXIT_MSG
      );
    }

    return next();
  }
}

export default CheckUsernameExistMiddleware;
