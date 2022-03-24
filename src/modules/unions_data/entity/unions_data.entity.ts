import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Language } from 'src/modules/language/entity/language.entity';
import { Unions } from 'src/modules/unions/entity/unions.entity';
@Entity()
export class Union_Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @Column()
  description: string;

  @ManyToOne(() => Language, (language) => language.union_data)
  public language!: Language;

  @ManyToOne(() => Unions, (unions) => unions.union_data)
  public unions!: Unions;
}
