import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Unions } from 'src/modules/unions/entity/unions.entity';
@Entity()
export class UnionTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  max_members: number;

  @Column()
  name: string;
  @OneToMany(() => Unions, (unions) => unions.id)
  unions: Unions[];
}
