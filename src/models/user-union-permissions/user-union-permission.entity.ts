import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Union } from '../unions/union.entity';
import { Permission } from '@enums/permission.enum';
import { Role } from '@enums/role.enum';

@Entity({
  name: 'user_union_permissions',
})
export class UserUnionPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userUnionPermissions)
  user: User;

  @ManyToOne(() => Union, (union) => union.userUnionPermissions)
  union: Union;

  @Column('simple-array', { array: true, default: [] })
  permission: Permission[];

  @Column('simple-array', { array: true, default: [] })
  roles: Role[];
}
