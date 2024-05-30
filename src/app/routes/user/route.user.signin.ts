import Controllers from '@src/app/controllers';
import Validators from '@src/app/validators';
import { IRoute } from '@src/types/App';
import { Router, Request, Response, NextFunction } from 'express';

class SigninUserRoute implements IRoute {
  path: string;

  router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router.route(`${this.path}/signin`).post(
      (req: Request, res: Response, next: NextFunction) =>
        Validators.UserValidators.UserSignin.run(req, res, next),
      (req: Request, res: Response) =>
        Controllers.UserControllers.UserSignin.execute(req, res)
    );
  }
}

export default SigninUserRoute;
