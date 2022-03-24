import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { WorkSpaceKeys } from 'src/modules/workspace_keys/entity/workspace_keys.entity';
import { Scripts } from 'src/modules/scripts/entity/scripts.entity';
import { Unions } from 'src/modules/unions/entity/unions.entity';
@Entity()
export class Workspaces {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => WorkSpaceKeys, (workSpaceKeys) => workSpaceKeys.id)
  workSpaceKeys: WorkSpaceKeys[];

  @OneToMany(() => Scripts, (scripts) => scripts.id)
  scripts: Scripts;
  @ManyToOne(() => Unions, (unions) => unions.id)
  unions: Unions[];
}
