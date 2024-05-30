import CreateUserController from './controller.user.signup';
import UserSigninController from './controller.user.signin';

const CreateUser = new CreateUserController();
const UserSignin = new UserSigninController();

const UserControllers = { CreateUser, UserSignin };

export default UserControllers;
