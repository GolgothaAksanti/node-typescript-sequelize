import { NextFunction, Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Validators from '@src/app/validators';
import Controllers from '@src/app/controllers';
import Middlewares from '@src/app/middlewares';

class DeletePostRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}/:postId`).delete(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.PostValidators.PostId.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.Auth.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.PostControllers.DeletePost.execute(req, res)
    );
  }
}

export default DeletePostRoute;
