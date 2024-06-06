import CheckEmailExistMiddleware from './middleware.user.check.exist.email';
import CheckUsernameExistMiddleware from './middleware.user.check.exist.username';
import AuthMiddleware from './middleware.auth';

const CheckUsernameExist = new CheckUsernameExistMiddleware();
const CheckEmailExist = new CheckEmailExistMiddleware();
const Auth = new AuthMiddleware();

const UserMiddlewares = { CheckUsernameExist, CheckEmailExist, Auth };

export default UserMiddlewares;
