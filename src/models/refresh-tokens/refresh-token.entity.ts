import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity({
  name: 'refresh_tokens',
})
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maxMembers: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.refreshTokens)
  user: User;
}
