import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Refresh_Token } from 'src/modules/refresh_tokens/entity/refresh_tokens.entity';
import { Scripts } from 'src/modules/scripts/entity/scripts.entity';
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column()
  position: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Refresh_Token, (refresh_token) => refresh_token.id)
  refresh_token: Refresh_Token;

  @OneToMany(() => Scripts, (scripts) => scripts.id)
  scripts: Scripts;

}
