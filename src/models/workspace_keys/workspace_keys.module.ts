import { Module } from '@nestjs/common';
import { WorkspaceKeysService } from './workspace_keys.service';
import { WorkspaceKeysController } from './workspace_keys.controller';

@Module({
  providers: [WorkspaceKeysService],
  controllers: [WorkspaceKeysController]
})
export class WorkspaceKeysModule {}
