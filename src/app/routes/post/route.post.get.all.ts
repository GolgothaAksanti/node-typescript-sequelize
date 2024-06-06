import { Request, Response, Router } from 'express';

import { IRoute } from '@src/types/App';
import Controllers from '@src/app/controllers';

class GetAllPostRoute implements IRoute {
  public path: string;
  public router = Router();

  constructor(path: string) {
    this.path = path;
    this.initRoute();
  }

  private initRoute(): void {
    this.router
      .route(`${this.path}`)
      .get((req: Request, res: Response) =>
        Controllers.PostControllers.GetAllPost.execute(req, res)
      );
  }
}

export default GetAllPostRoute;
