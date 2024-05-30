import UserSigninValidator from './validator.user.signin';
import UserSignupValidator from './validator.user.signup';

const UserSignin = new UserSigninValidator();
const UserSignup = new UserSignupValidator();

const UserValidators = { UserSignin, UserSignup };

export default UserValidators;
