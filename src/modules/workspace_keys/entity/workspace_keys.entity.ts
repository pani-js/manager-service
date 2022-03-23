import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkSpaceKeys {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;
}