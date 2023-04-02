import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model'
import { Profile } from 'src/profile/profile.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService], 
  imports: [SequelizeModule.forFeature([User, Profile])]
})
export class UsersModule {}
