import request from 'supertest';

import { appTest, database, prefix } from '@src/__mocks__/variables.mock';
import {
  userSigninData,
  userSignupData,
  wrongUserEmailSigninData,
  wrongUserPasswordSigninData,
  wrongUserUsernameSigninData,
} from '@src/__mocks__/user.mock';

describe('signup', () => {
  it('signup a user', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signup`)
      .send(userSignupData);

    expect(res.body.status).toBe(201);
  });

  it('cannot signup a user with the same (username/ email)', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signup`)
      .send(userSignupData);

    expect(res.body.status).toBe(400);
  });

  it('should signin a user ', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signin`)
      .send(userSigninData);

    expect(res.body.status).toBe(200);
  });

  it('should not signin a user with a wrong email', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signin`)
      .send(wrongUserEmailSigninData);

    expect(res.body.status).toBe(400);
  });

  it('should not signin a user with a wrong username', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signin`)
      .send(wrongUserUsernameSigninData);

    expect(res.body.status).toBe(400);
  });

  it('should not signin a user with a wrong username', async () => {
    const res = await request(appTest)
      .post(`${prefix}/user/signin`)
      .send(wrongUserPasswordSigninData);

    expect(res.body.status).toBe(400);
  });
});

afterAll(async () => {
  await database.Post.destroy({
    where: {},
  });
  await database.User.destroy({
    where: {},
  });
});
