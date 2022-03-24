import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/modules/user/entity/user.entity';
import { Workspaces } from 'src/modules/workspaces/entity/workspaces.entity';

@Entity()
export class Scripts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  is_public: boolean;

  @Column()
  created_at: string;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.scripts)
  public workspaces!: Workspaces;

  @ManyToOne(() => User, (user) => user.scripts)
  public user!: User;
}
