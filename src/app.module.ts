import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@models/users/users.module';
import { UnionsModule } from '@models/unions/unions.module';
import { User } from '@models/users/user.entity';
import { Union } from '@models/unions/union.entity';
import { Language } from '@models/languages/language.entity';
import { Workspace } from '@models/workspaces/workspace.entity';
import { UnionType } from '@models/union-types/union-type.entity';
import { RefreshToken } from '@models/refresh-tokens/refresh-token.entity';
import { WorkSpaceKey } from '@models/workspace-keys/workspace-key.entity';
import { UnionsDataModule } from '@models/unions-data/unions-data.module';
import { UnionData } from '@models/unions-data/union-data.entity';
import { ScriptsModule } from '@models/scripts/scripts.module';
import { Script } from '@models/scripts/script.entity';
import { UserUnionPermission } from '@models/user-union-permissions/user-union-permission.entity';
import { LanguageModule } from './models/languages/languages.module';
import { PermissionsModule } from './models/permissions/permissions.module';
import { RefreshTokensModule } from './models/refresh-tokens/refresh-tokens.module';
import { UnionTypesModule } from './models/union-types/union-types.module';
import { WorkspaceKeysModule } from './models/workspace-keys/workspace-keys.module';
import { WorkspacesModule } from './models/workspaces/workspaces.module';
import { Permission } from './models/permissions/permissions.entity';
import { AuthModule } from './models/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
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
        User,
        UnionType,
        Union,
        Workspace,
        Language,
        RefreshToken,
        WorkSpaceKey,
        UnionData,
        Script,
        UserUnionPermission,
        Permission,
      ],
      synchronize: true,
    }),
    LanguageModule,
    UsersModule,
    UnionsModule,
    UnionsDataModule,
    ScriptsModule,
    PermissionsModule,
    RefreshTokensModule,
    UnionTypesModule,
    WorkspaceKeysModule,
    WorkspacesModule,
    AuthModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
