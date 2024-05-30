import App from '@src/app/App';
import routes from '@src/app/routes';
import { db } from '@src/database/models';

export const appTest = new App(routes).getApp();
export const database = db;
export const prefix = '/api';
