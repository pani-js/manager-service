import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workspaces } from 'src/models/workspaces/entity/workspaces.entity';
@Entity()
export class WorkSpaceKeys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.id)
  workspaces: Workspaces;
}
