import { createConnection } from 'typeorm';
import {NoteEntity} from "./note.entity";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'app',
            password: 'app',
            database: 'app',
            entities: [
                NoteEntity
            ],
            synchronize: true,
        }),
    },
];
