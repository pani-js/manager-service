import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UnionData } from '../unions-data/union-data.entity';

@Entity({
  name: 'languages',
})
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locale: string;

  @Column()
  name: string;

  @OneToMany(() => UnionData, (unionData) => unionData.language)
  unionData: UnionData[];
}
