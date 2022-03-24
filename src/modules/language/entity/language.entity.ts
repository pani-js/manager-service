import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locale: string;

  @Column()
  name: string;
}
