import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Union_Data } from 'src/modules/unions_data/entity/unions_data.entity';
@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locale: string;

  @Column()
  name: string;

  @OneToMany(() => Union_Data, (union_data) => union_data.language)
  public union_data!: Union_Data[];
}
