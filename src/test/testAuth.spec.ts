import * as request from 'supertest';
import { start } from '../main';

describe('Authorisation', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/GET users`, () => {
    request('http://localhost:3000/auth').get('').expect(200, '');
  })
})