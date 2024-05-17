import { Dialect } from 'sequelize';
import dotenv from 'dotenv';
import { IDBConfig } from '@src/types/db';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;



const config: { [key: string]: IDBConfig } = {
  development: {
    username: DB_USER!,
    password: DB_PASSWORD!,
    database: DB_NAME!,
    host: DB_HOST!,
    port: Number(DB_PORT),
    dialect: 'mysql' as Dialect,
  },
  test: {
    username: DB_USER!,
    password: DB_PASSWORD!,
    database: DB_NAME!,
    host: DB_HOST!,
    port: Number(DB_PORT),
    dialect: 'mysql' as Dialect,
  },
  production: {
    username: DB_USER!,
    password: DB_PASSWORD!,
    database: DB_NAME!,
    host: DB_HOST!,
    port: Number(DB_PORT),
    dialect: 'mysql' as Dialect,
  },
};

export default config;

// import { Sequelize } from 'sequelize';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: DB_HOST,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
// });

// sequelize
//   .sync()
//   .then(() => {
//     console.log('tables sync successfully');
//   })
//   .catch(error => {
//     console.log('Error sync tables', error);
//   });

// export default sequelize;

// config/config.ts
