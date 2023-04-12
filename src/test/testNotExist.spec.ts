import * as request from 'supertest';
import { start } from '../main';

describe('not exist', () => {

 
  it(`/GET not exist`, () => {
    request('http://localhost:3000/mouse').get('').expect(404);
  })
})