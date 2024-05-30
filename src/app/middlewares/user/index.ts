import CheckEmailExistMiddleware from './middleware.user.check.exist.email';
import CheckUsernameExistMiddleware from './middleware.user.check.exist.username';

const CheckUsernameExist = new CheckUsernameExistMiddleware();
const CheckEmailExist = new CheckEmailExistMiddleware();

const UserMiddlewares = { CheckUsernameExist, CheckEmailExist };

export default UserMiddlewares;
