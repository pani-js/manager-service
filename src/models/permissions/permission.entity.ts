import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;
}
