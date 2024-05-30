import { NextFunction, Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Validators from '@src/app/validators';
import Middlewares from '@src/app/middlewares';
import Controllers from '@src/app/controllers';

class SignupUserRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}/signup`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.UserValidators.UserSignup.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckEmailExist.run(req, res, next),

      (req: Request, res: Response, next: NextFunction) =>
        Middlewares.UserMiddlewares.CheckUsernameExist.run(req, res, next),

      (req: Request, res: Response) =>
        Controllers.UserControllers.CreateUser.execute(req, res)
    );
  }
}

export default SignupUserRoute;
