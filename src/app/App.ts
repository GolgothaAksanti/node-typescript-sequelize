import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import Base from '@src/core/base/Base';
import Util from '@src/core/utils';
import { IRoute } from '@src/types/App';
import { httpLogStream } from '@src/core/utils/logger';

class App extends Base {
  public app: Application;

  constructor(routes: IRoute[]) {
    super();
    this.app = express();
    this.initMiddlewares();
    this.initRoutes(routes);
    this.initDefaultRoutes();
  }

  private initMiddlewares(): void {
    this.app.use(bodyParser.json({ limit: '500mb' }));
    this.app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' }));
    this.app.use(morgan('dev'));
    this.app.use(morgan('combined', { stream: httpLogStream }));
  }

  private initRoutes(routes: IRoute[]): void {
    routes.forEach(route => {
      this.app.use('/api', route.router);
    });
  }

  private initDefaultRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      return this.responseHandler(res, this.SUCCESS_CODE, this.WLECOME_MSG);
    });

    this.app.all('/', (req: Request, res: Response) => {
      return this.responseHandler(
        res,
        this.BAD_REQUEST_CODE,
        this.INVALID_METOD
      );
    });

    this.app.use('*', (req: Request, res: Response) => {
      Util.logger.error(this.INVALID_ROUTE);
      return this.responseHandler(res, this.NOT_FOUND_CODE, this.INVALID_ROUTE);
    });
  }

  listen(): void {
    this.app.listen(Util.port, () => {
      Util.logger.info(this.listening(Util.port));
    });
  }

  getApp = () => this.app;
}

export default App;
