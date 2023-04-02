import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.model';
import { TextsModule } from './texts/texts.module';
import { Text } from './texts/texts.model';
import { FilesModule } from './files/files.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Spges3spges',
    database: 'movie_db',
    models: [User, Profile, Text],
    autoLoadModels: true,
  }), 
  UsersModule, 
  ProfileModule, 
  TextsModule, 
  FilesModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
