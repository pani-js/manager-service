import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;
}
