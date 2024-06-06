import { NextFunction, Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Validators from '@src/app/validators';
import Middlewares from '@src/app/middlewares';
import Controllers from '@src/app/controllers';

class CreatePostRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.PostValidators.CreatePost.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.Auth.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.PostControllers.CreatePost.execute(req, res)
    );
  }
}

export default CreatePostRoute;
