//Файл модуля группирует основные части: контроллер, логику и модели.
//Формирует костяк конфигурации модуля, из чего он состоит.
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model'
import { Profile } from '../profile/profile.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService], 
  imports: [SequelizeModule.forFeature([User, Profile])],
  exports: [UsersService]

})
export class UsersModule {}
