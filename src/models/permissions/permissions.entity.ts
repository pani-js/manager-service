import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserUnionPermission } from '../user-union-permissions/user-union-permission.entity';

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
