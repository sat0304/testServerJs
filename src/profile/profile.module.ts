import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [SequelizeModule.forFeature([Profile, User])]
})
export class ProfileModule {}
