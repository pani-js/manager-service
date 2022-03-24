import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workspaces {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
