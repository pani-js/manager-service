import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Language } from '../languages/language.entity';
import { Union } from '../unions/union.entity';

@Entity({
  name: 'unions_data',
})
export class UnionData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @Column()
  description: string;

  @ManyToOne(() => Language, (language) => language.unionData)
  language: Language;

  @ManyToOne(() => Union, (union) => union.unionData)
  union: Union;
}
