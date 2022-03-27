import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { WorkSpaceKey } from '../workspace-keys/workspace-key.entity';
import { Script } from '../scripts/script.entity';
import { Union } from '../unions/union.entity';

@Entity({
  name: 'workspace',
})
export class Workspace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => WorkSpaceKey, (workSpaceKey) => workSpaceKey.workspace)
  workSpaceKeys: WorkSpaceKey[];

  @OneToMany(() => Script, (script) => script.workspace)
  scripts: Script[];

  @ManyToOne(() => Union, (union) => union.workspaces)
  union: Union;
}
