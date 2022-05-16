import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RefreshToken } from '../refresh-tokens/refresh-token.entity';
import { Script } from '../scripts/script.entity';
import { UserUnionPermission } from '../user-union-permissions/user-union-permission.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, default: '' })
  username: string;

  @Column({ length: 100, default: '' })
  firstName: string;

  @Column({ length: 100, default: '' })
  lastName: string;

  @Column({ default: '' })
  position: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: '' })
  avatar: string;

  @Column({ default: false })
  verified: boolean;

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
  refreshTokens: RefreshToken[];

  @OneToMany(() => Script, (script) => script.user)
  scripts: Script[];

  @OneToMany(
    () => UserUnionPermission,
    (userUnionPermission) => userUnionPermission.user,
  )
  userUnionPermissions: UserUnionPermission[];
}
