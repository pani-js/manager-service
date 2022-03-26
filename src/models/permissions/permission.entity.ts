import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserUnionPermission } from '../user_union_permissions/user_union_permissions.entity';
@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @ManyToMany(() => UserUnionPermission)
  @JoinTable()
  userUnionPermission: UserUnionPermission[];
}
