import SignupUserRoute from './route.user.signup';
import SigninUserRoute from './route.user.signin';

const USER_PATH = '/user';

const SignupUser = new SignupUserRoute(USER_PATH);
const SigninUser = new SigninUserRoute(USER_PATH);

const UserRoutes = { SignupUser, SigninUser };

export default UserRoutes;
