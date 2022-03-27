import { Module } from '@nestjs/common';
import { UserUnionPermissionsController } from './user_union_permissions.controller';

@Module({
  controllers: [UserUnionPermissionsController],
})
export class UserUnionPermissionsModule {}
