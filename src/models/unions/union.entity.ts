import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UnionType } from '../union-types/union-type.entity';
import { UnionData } from '../unions-data/union-data.entity';
import { Workspace } from '../workspaces/workspace.entity';
import { User } from '../users/user.entity';

@Entity({
  name: 'unions',
})
export class Union {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  logo: string;

  @ManyToOne(() => UnionType, (unionType) => unionType.unions)
  unionType: UnionType;

  @OneToMany(() => UnionData, (unionData) => unionData.union)
  unionData: UnionData[];

  @OneToMany(() => Workspace, (workspace) => workspace.union)
  workspaces: Workspace[];

  @ManyToMany(() => User)
  @JoinTable()
  permissions: User[];
}
