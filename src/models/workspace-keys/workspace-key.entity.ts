import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workspace } from '../workspaces/workspace.entity';

@Entity({
  name: 'workspace_keys',
})
export class WorkSpaceKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.workSpaceKeys)
  workspace: Workspace;
}
