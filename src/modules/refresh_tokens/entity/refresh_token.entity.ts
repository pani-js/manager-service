import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Refresh_Token {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    max_members: number;

    @Column()
    name: string;
    
}