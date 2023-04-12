import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';
import { User } from '../users/users.model';
import { TextsController } from './texts.controller';
import { Text } from './texts.model';
import { TextsService } from './texts.service';

@Module({
  controllers: [TextsController],
  providers: [TextsService],
  imports: [SequelizeModule.forFeature([User, Text]),
            FilesModule]
})
export class TextsModule {}
