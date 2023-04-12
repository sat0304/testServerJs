import * as request from 'supertest';
import { start } from '../main';

describe('Movie', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/GET movie`, () => {
    request('http://localhost:3000/movie').get('/i').expect(200, '');
  })
  // after(process.exit(0))
})