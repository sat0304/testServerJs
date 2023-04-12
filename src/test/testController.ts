// import { Test } from '@nestjs/testing';
// import { UsersController } from '../users/users.controller';
// import { UsersService } from '../users/users.service';
// import { User } from '../users/users.model';

// describe('UsersController', () => {
//   let uController: UsersController;
//   let uService: UsersService;
//   let uRepository: UsersService["userRepository"];
//   // let uRepository: User;

//   beforeEach(() => {
//     uService = new UsersService(User);
//     uController = new UsersController(uService);
//   });

//   describe('findAll', () => {
//     it('should return an array of users', async () => {
//       // let result = User["userRepository"];
//       let result = User['test'];
//       jest.spyOn(uRepository, 'findAll').mockImplementation(() => result);

//       expect(await uController.findAll()).toBe(result);
//     });
//   });
// });

import { Test } from '@nestjs/testing';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.model';
import { start } from '../main';

describe('UserController', () => {
    // beforeEach(function() {
    //   start()
    // });

  let testUser: User;
  let usersController: UsersController;
  let usersService: UsersService ;
  // let uRepository = new UsersService(User);

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();

    usersService = moduleRef.get<UsersService >(UsersService );
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = User['test'];
      jest.spyOn(usersService['userRepository'], 'findAll').mockImplementation(() => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });

})