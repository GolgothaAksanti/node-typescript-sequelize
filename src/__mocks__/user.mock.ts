import { UserAttributes } from '@src/database/models/User';
import { IUserSignin } from '@src/types/user.type';

export const userSignupData: UserAttributes = {
  username: 'gola',
  fullname: 'golgotha aksanti',
  email: 'gol111@gmail.com',
  password: '00000000',
};
export const userSigninData: IUserSignin = {
  login: 'gola',
  password: '00000000',
};
