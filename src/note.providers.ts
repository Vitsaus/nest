import {Connection, Repository} from 'typeorm';
import { NoteEntity } from './note.entity';
import {DATABASE_CONNECTION, NOTE_MAPPER, NOTE_REPOSITORY, NOTE_SERVICE} from "./constants";
import {NoteMapper} from "./note.mapper";
import {NoteService} from "./note.service";

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
    },
    {
        provide: NOTE_SERVICE,
        inject: [NOTE_MAPPER, NOTE_REPOSITORY],
        useFactory: (
            noteMapper: NoteMapper,
            noteRepository: Repository<NoteEntity>
        ) => new NoteService(
            noteMapper,
            noteRepository
        )
    }
];
