import { NextFunction, Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Validators from '@src/app/validators';
import Controllers from '@src/app/controllers';

class GetOnePostRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}/:postId`).get(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.PostValidators.PostId.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.PostControllers.GetPost.execute(req, res)
    );
  }
}

export default GetOnePostRoute;
