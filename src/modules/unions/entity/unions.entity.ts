import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  logo: string;
}
