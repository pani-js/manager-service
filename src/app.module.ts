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
import { UnionTypes } from './modules/union_types/entity/union_type.entity';
import { Permissions } from './modules/permissions/entity/permissions.entity';
import { Refresh_Token } from './modules/refresh_tokens/entity/refresh_tokens.entity';
import { WorkSpaceKeys } from './modules/workspace_keys/entity/workspace_keys.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'pani',
      entities: [
        Permissions,
        User,
        UnionTypes,
        Unions,
        Workspaces,
        Language,
        Refresh_Token,
        WorkSpaceKeys,
      ],
      synchronize: true,
    }),

    UsersModule,
    UnionsModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
