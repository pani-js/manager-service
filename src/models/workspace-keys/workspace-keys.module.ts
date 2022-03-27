import { Module } from '@nestjs/common';
import { WorkspaceKeysService } from './workspace-keys.service';
import { WorkspaceKeysController } from './workspace-keys.controller';

@Module({
  providers: [WorkspaceKeysService],
  controllers: [WorkspaceKeysController],
})
export class WorkspaceKeysModule {}
