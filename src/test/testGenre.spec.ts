import { start } from '../main';
import * as request from 'supertest'


describe('Genre', () => {
    // beforeEach(function() {
    //   start()
    // });
   
    it(`/GET users`, () => {
      request('http://localhost:3000/genre').get('').expect(200);
    })

  })