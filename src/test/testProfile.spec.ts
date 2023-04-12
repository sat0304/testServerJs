import * as request from 'supertest';
import { start } from '../main';

describe('Profile', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/GET profile`, () => {
    request('http://localhost:3000/profile').get('').expect(200, '');
  })
  // after(process.exit(0))
})