import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/models/user/entity/user.entity';
@Entity()
export class Refresh_Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  max_members: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
