import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { Permission } from './permissions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: [PermissionsService],
  controllers: [PermissionsController],
  imports: [TypeOrmModule.forFeature([Permission])],
})
export class PermissionsModule {}
