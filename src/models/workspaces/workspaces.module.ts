import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './workspace.entity';

@Module({
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
  imports: [TypeOrmModule.forFeature([Workspace])],
})
export class WorkspacesModule {}
