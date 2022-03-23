import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';
import { User } from './modules/user/entity/user.enity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: "postgres",
      password: "root",
      database: process.env.POSTGRES_DB,
      entities: [User],
      synchronize: true,
    }), 

    UsersModule,

    ConfigModule.forRoot({
      envFilePath:  ['.env.development.local', '.env.development'],
      isGlobal: true
    })

  ],

  controllers: [AppController],

  providers: [AppService],

})

export class AppModule { }
