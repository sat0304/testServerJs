import * as request from 'supertest';
import { start } from '../main';

describe('File', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/GET files`, () => {
    request('http://localhost:3000/file').get('').expect(200, '');
  })
  // after(process.exit(0))
})