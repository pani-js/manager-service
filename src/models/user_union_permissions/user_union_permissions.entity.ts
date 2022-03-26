import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Union } from '../unions/union.entity';

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
}
