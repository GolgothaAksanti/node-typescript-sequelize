import request from 'supertest';

import { appTest, database, prefix } from '@src/__mocks__/variables.mock';
import { userSignupData } from '@src/__mocks__/user.mock';

describe('signup', () => {
  it('signup a user', async () => {
    const res = await request(appTest)
      .post(`/api/user/signup`)
      .send(userSignupData);

    expect(res.body.status).toBe(201);
  });

  it('cannot signup a user with the same (username/ email)', async () => {
    const res = await request(appTest)
      .post(`/api/user/signup`)
      .send(userSignupData);

    console.log({ result: res });
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
