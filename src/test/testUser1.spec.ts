import { start } from '../main';
import * as request from 'supertest'


describe('User 3', () => {
    // beforeEach(function() {
    //   start()
    // });
   
    it(`/GET users  3`, () => {
      request('http://localhost:3000/users/3').get('').expect(200);
    })

  })