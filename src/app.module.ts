import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.model';
import { TextsModule } from './texts/texts.module';
import { TextsModule } from './texts/texts.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Spges3spges',
    database: 'movie_db',
    models: [User, Profile],
    autoLoadModels: true,
  }), 
  UsersModule, 
  ProfileModule, 
  TextsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
