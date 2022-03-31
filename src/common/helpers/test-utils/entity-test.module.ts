import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Script } from '@models/scripts/script.entity';
import { Language } from '@models/languages/language.entity';
import { RefreshToken } from '@models/refresh-tokens/refresh-token.entity';
import { UnionType } from '@models/union-types/union-type.entity';
import { UnionData } from '@models/unions-data/union-data.entity';
import { Union } from '@models/unions/union.entity';
import { User } from '@models/users/user.entity';
import { WorkSpaceKey } from '@models/workspace-keys/workspace-key.entity';
import { Workspace } from '@models/workspaces/workspace.entity';
import { UserUnionPermission } from '@models/user-union-permissions/user-union-permission.entity';

const entities = [
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
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.test'],
      isGlobal: true,
    }),

    TypeOrmModule.forFeature(entities),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities,
      synchronize: true,
    }),
  ],
})
export class EntityTestModule {}
