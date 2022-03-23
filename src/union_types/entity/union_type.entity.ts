import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    max_members: number;

    @Column()
    name: string;
    
}