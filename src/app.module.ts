import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';
import { UnionsModule } from './modules/unions/unions.module';
import { User } from './modules/user/entity/user.enity';
import { Unions } from './modules/unions/entity/unions.entity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "pani",
      entities: [

        User,

        Unions

      ],
      synchronize: true,
    }), 

    UsersModule,

    UnionsModule,

    ConfigModule.forRoot({
      envFilePath:  ['.env.development.local', '.env.development'],
      isGlobal: true
    })

  ],

  controllers: [AppController],

  providers: [AppService],

})

export class AppModule { }
