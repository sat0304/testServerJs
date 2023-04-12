import * as request from 'supertest';
import { Test } from '@nestjs/testing';
// import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
// import { User } from '../users/users.model';
import { INestApplication } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { User } from '../users/users.model';

describe('Users', () => {
  let app: INestApplication;
  let testUser: User;
  let userService = { findAll: () => [testUser] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService['userRepository'])
      .useValue(userService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET users`, () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect({
        data: userService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});