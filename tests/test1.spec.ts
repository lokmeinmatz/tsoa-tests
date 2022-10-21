import {
  describe,
  expect,
  it
} from 'vitest'
import { createApp1 } from '../src/app1'
import supertest from 'supertest'

describe('Integration test', () => {
  it('should work', async () => {
    const app1 = await createApp1();
    const res = await supertest(app1).get('/users?user=hans&data=asdf')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({
      name: 'hans',
      data: 'asdf'
    });
  })
})