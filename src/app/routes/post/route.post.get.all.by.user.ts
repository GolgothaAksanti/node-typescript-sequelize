import { NextFunction, Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Controllers from '@src/app/controllers';
import Middlewares from '@src/app/middlewares';

class GetAllPostByUserRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}/user`).get(
      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.Auth.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.PostControllers.GetAllPostByUser.execute(req, res)
    );
  }
}

export default GetAllPostByUserRoute;
