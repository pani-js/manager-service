import { Module } from '@nestjs/common';
import { WorkSpaceKeyService } from './workspace-keys.service';
import { WorkspaceKeysController } from './workspace-keys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkSpaceKey } from './workspace-key.entity';

@Module({
  providers: [WorkSpaceKeyService],
  controllers: [WorkspaceKeysController],
  imports: [TypeOrmModule.forFeature([WorkSpaceKey])],
})
export class WorkspaceKeysModule {}
