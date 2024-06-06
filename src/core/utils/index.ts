import TokenUtils from '@src/core/utils/token';
import removeProperties from './remove.properties';
import PasswordUtils from '@src/core/utils/password';
import logger from '@src/core/utils/logger';
import port from '@src/core/utils/port';
import { swaggerOptions } from './swagger.options';
import { generateSlug } from './generate.slug';

const Token = new TokenUtils();
const Password = new PasswordUtils();

const Util = {
  Token,
  Password,
  logger,
  port,
  removeProperties,
  swaggerOptions,
  generateSlug,
};

export default Util;
