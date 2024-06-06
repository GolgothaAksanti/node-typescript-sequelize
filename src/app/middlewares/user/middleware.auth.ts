import { Request, Response, NextFunction } from 'express';

import BaseMiddleware from '@src/core/base/middleware';
import Util from '@src/core/utils';

class AuthMiddleware extends BaseMiddleware {
  protected async middleware(
    req: Request | any,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const token = await Util.Token.extract(req);

    if (!token) {
      return this.responseHandler(
        res,
        this.UNAUTHORIZED_CODE,
        this.UNAUTHORIZED_MSG
      );
    }

    const decoded = await Util.Token.decode(token);

    if (decoded?.errors) {
      return this.responseHandler(
        res,
        this.UNAUTHORIZED_CODE,
        this.UNAUTHORIZED_MSG
      );
    }

    const user = await this.Service.UserServices.GetUserById.call(
      decoded?.payload?.userId
    );

    if (!user) {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.EMAIL_ALREADY_EXIT_MSG
      );
    }

    req.currentUser = user;

    return next();
  }
}

export default AuthMiddleware;
