import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workspaces } from 'src/modules/workspaces/entity/workspaces.entity';
@Entity()
export class WorkSpaceKeys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.id)
  workspaces: Workspaces;
}
