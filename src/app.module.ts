import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './models/users/users.module';
import { UnionsModule } from './models/unions/unions.module';
import { User } from './models/users/user.entity';
import { Union } from './models/unions/union.entity';
import { Language } from './models/languages/language.entity';
import { Workspace } from './models/workspaces/workspace.entity';
import { UnionType } from './models/union-types/union-type.entity';
import { Permission } from './models/permissions/permission.entity';
import { RefreshToken } from './models/refresh-tokens/refresh-token.entity';
import { WorkSpaceKey } from './models/workspace-keys/workspace-key.entity';
import { UnionsDataService } from './models/unions-data/unions-data.service';
import { UnionsDataModule } from './models/unions-data/unions-data.module';
import { UnionData } from './models/unions-data/union-data.entity';
import { ScriptsController } from './models/scripts/scripts.controller';
import { ScriptsService } from './models/scripts/scripts.service';
import { ScriptsModule } from './models/scripts/scripts.module';
import { Script } from './models/scripts/script.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        Permission,
        User,
        UnionType,
        Union,
        Workspace,
        Language,
        RefreshToken,
        WorkSpaceKey,
        UnionData,
        Script,
      ],
      synchronize: true,
    }),

    UsersModule,
    UnionsModule,
    UnionsDataModule,
    ScriptsModule,
  ],

  controllers: [AppController, ScriptsController],

  providers: [AppService, UnionsDataService, ScriptsService],
})
export class AppModule {}
