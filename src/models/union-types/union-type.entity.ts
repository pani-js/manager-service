import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Union } from '../unions/union.entity';

@Entity({
  name: 'union_types',
})
export class UnionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maxMembers: number;

  @Column()
  name: string;

  @OneToMany(() => Union, (union) => union.unionType)
  unions: Union[];
}
