import request from 'supertest';
import { appTest } from '@src/__mocks__/variables.mock';

describe('Core tests', () => {
  it('Should return 200', async () => {
    const res = await request(appTest).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe(`Welcome to the API`);
  });

  it('Should return Invalid method', async () => {
    const res = await request(appTest).post('/');
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Invalid method');
  });

  it('Should return Invalid method', async () => {
    const res = await request(appTest).get('/invalid');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Invalid route');
  });
});
