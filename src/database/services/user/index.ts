import UserSigninService from './service.user.signin';
import UserSignupService from './service.user.signup';
import GetUserByIdService from './service.user.get.by.id';
import GetUserByEmailService from './service.user.get.by.email';
import GetUserByUsernameService from './service.user.get.by.username';

const GetUserByEmail = new GetUserByEmailService();
const GetUserByUsername = new GetUserByUsernameService();
const GetUserById = new GetUserByIdService();
const UserSignup = new UserSignupService();
const UserSignin = new UserSigninService();

const UserServices = { GetUserByEmail, GetUserById, UserSignin, UserSignup, GetUserByUsername };

export default UserServices;
