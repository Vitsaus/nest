import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'note' })
export class NoteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

}
