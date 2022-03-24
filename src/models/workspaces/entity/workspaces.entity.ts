import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { WorkSpaceKeys } from 'src/models/workspace_keys/entity/workspace_keys.entity';
import { Scripts } from 'src/models/scripts/entity/scripts.entity';
import { Unions } from 'src/models/unions/entity/unions.entity';
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
