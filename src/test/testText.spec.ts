import * as request from 'supertest';
import { start } from '../main';

describe('Text', () => {
  // beforeEach(function() {
  //   start()
  // });
 
  it(`/GET texts`, () => {
    request('http://localhost:3000/texts').get('').expect(200, '');
  })
  // after(process.exit(0))
})