import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Workspace } from '../workspaces/workspace.entity';

@Entity({
  name: 'scripts',
})
export class Script {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isPublic: boolean;

  @Column()
  createdAt: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.scripts)
  workspace: Workspace;

  @ManyToOne(() => User, (user) => user.scripts)
  user: User;
}
