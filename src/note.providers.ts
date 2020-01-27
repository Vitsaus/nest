import { Connection } from 'typeorm';
import { NoteEntity } from './note.entity';
import {DATABASE_CONNECTION, NOTE_MAPPER, NOTE_REPOSITORY} from "./constants";
import {NoteMapper} from "./note.mapper";

export const noteProviders = [
    {
        provide: NOTE_REPOSITORY,
        inject: [DATABASE_CONNECTION],
        useFactory: (connection: Connection) => connection.getRepository(NoteEntity),
    },
    {
        provide: NOTE_MAPPER,
        inject: [],
        useFactory: () => new NoteMapper(),
    }
];
