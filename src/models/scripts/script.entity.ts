import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity({
  name: 'scripts',
})
export class Script {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isPublic: boolean;

  @Column()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.scripts)
  user: User;
}
