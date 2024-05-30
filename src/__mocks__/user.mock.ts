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

export const wrongUserEmailSigninData: IUserSignin = {
  login: 'gol11eieiei1@gmail.com',
  password: '00000000',
};

export const wrongUserUsernameSigninData: IUserSignin = {
  login: 'golo',
  password: '00000000',
};

export const wrongUserPasswordSigninData: IUserSignin = {
  login: 'golo',
  password: '01000000',
};
