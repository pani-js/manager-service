import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';
import { UnionsModule } from './modules/unions/unions.module';
import { User } from './modules/user/entity/user.enity';
import { Unions } from './modules/unions/entity/unions.entity';
import { Language } from './modules/language/entity/language.entity';
import { Workspaces } from './modules/workspaces/entity/workspaces.entity';
import { UnionTypesModule } from './union_types/union_types.module';




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

        Unions,
        Workspaces,
        Language

      ],
      synchronize: true,
    }), 

    UsersModule,

    UnionsModule,

    ConfigModule.forRoot({
      envFilePath:  ['.env.development.local', '.env.development'],
      isGlobal: true
    }),

    UnionTypesModule,


  ],

  controllers: [AppController],

  providers: [AppService],

})

export class AppModule { }
