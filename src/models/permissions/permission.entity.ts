import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(
    () => UserUnionPermission,
    (userUnionPermission) => userUnionPermission.permission,
  )
  userUnionPermissions: UserUnionPermission[];
}
