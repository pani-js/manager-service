import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Union } from '../unions/union.entity';
import { Permission } from '../permissions/permission.entity';
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

  @ManyToOne(() => Permission, (permission) => permission.userUnionPermissions)
  permission: Permission;
}
