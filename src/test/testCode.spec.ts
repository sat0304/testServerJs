import { start } from '../main';
import * as request from 'supertest'


describe('Users', () => {
    // beforeEach(function() {
    //   start()
    // });
   
    it(`/GET users`, () => {
      request('http://localhost:3000/users').get('').expect(200);
    })
    // after(process.exit(0))
  })