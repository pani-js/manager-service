import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './models/user/user.module';
import { UnionsModule } from './models/unions/unions.module';
import { User } from './models/user/entity/user.entity';
import { Unions } from './models/unions/entity/unions.entity';
import { Language } from './models/language/entity/language.entity';
import { Workspaces } from './models/workspaces/entity/workspaces.entity';
import { UnionTypes } from './models/union_types/entity/union_type.entity';
import { Permissions } from './models/permissions/entity/permissions.entity';
import { Refresh_Token } from './models/refresh_tokens/entity/refresh_tokens.entity';
import { WorkSpaceKeys } from './models/workspace_keys/entity/workspace_keys.entity';
import { UnionsDataService } from './models/unions_data/unions_data.service';
import { UnionsDataModule } from './models/unions_data/unions_data.module';
import { Union_Data } from './models/unions_data/entity/unions_data.entity';
import { ScriptsController } from './models/scripts/scripts.controller';
import { ScriptsService } from './models/scripts/scripts.service';
import { ScriptsModule } from './models/scripts/scripts.module';
import { Scripts } from './models/scripts/entity/scripts.entity';
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
        Permissions,
        User,
        UnionTypes,
        Unions,
        Workspaces,
        Language,
        Refresh_Token,
        WorkSpaceKeys,
        Union_Data,
        Scripts,
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
