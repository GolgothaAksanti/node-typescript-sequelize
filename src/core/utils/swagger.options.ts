import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'node sequelize typescript api',
      version: '1.0.0',
      description: 'node sequelize typescript api',
    },
    path: {},
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'authorization',
          in: 'header',
        },
      },
    },
    servers: [
      {
        url: 'https://www.example.com',
        description: 'API Server Production',
      },
      {
        url: 'http://localhost:4001',
        description: 'API Server Localhost',
      },
    ],
  },
  apis: ['./**/*.yaml'],
};
