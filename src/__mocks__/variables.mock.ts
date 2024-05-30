import App from '@src/app/App';
import routes from '@src/app/routes';
// import db from '@src/database/definitions/models';

export const appTest = new App(routes).getApp();

// export const database: any = db;

export const prefix = '/api/v1';
