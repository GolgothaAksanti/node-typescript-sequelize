import { Sequelize } from 'sequelize';
const config = require('./config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('tables sync successfully');
  })
  .catch(error => {
    console.log('Error sync tables', error);
  });

export { sequelize };
