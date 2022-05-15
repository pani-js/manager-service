import { Module } from '@nestjs/common';
import { UserUnionPermissionsController } from './user-union-permissions.controller';

@Module({
  controllers: [UserUnionPermissionsController],
})
export class UserUnionPermissionsModule {}
