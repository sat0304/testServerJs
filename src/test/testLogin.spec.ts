import * as request from 'supertest';
import { start } from '../main';

describe('Login', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/POST login`, () => {
    request('http://localhost:3000/login').post('12345').expect(201);
  })
})