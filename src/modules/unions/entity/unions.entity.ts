import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UnionTypes } from 'src/modules/union_types/entity/union_type.entity';
import { Union_Data } from 'src/modules/unions_data/entity/unions_data.entity';
import { Workspaces } from 'src/modules/workspaces/entity/workspaces.entity';
import { User } from 'src/modules/user/entity/user.entity';
@Entity()
export class Unions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  logo: string;

  @ManyToOne(() => UnionTypes, (unionTypes) => unionTypes.id)
  unionTypes: UnionTypes[];

  @OneToMany(() => Union_Data, (union_data) => union_data.unions)
  public union_data!: Union_Data[];

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.id)
  workspaces: Workspaces[];
  @ManyToMany(() => User)
  @JoinTable()
  permissions: User[];
}
