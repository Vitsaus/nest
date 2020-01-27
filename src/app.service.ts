import {Inject, Injectable} from '@nestjs/common';
import {NOTE_REPOSITORY} from "./constants";
import {Repository} from "typeorm";
import {NoteEntity} from "./note.entity";
import {CreateNoteDto} from "./note.create.dto";

@Injectable()
export class AppService {
    constructor(
        @Inject(NOTE_REPOSITORY)
        private readonly noteEntityRepository: Repository<NoteEntity>,
    ) {}
    getHello(): string {
        return 'Hello World!';
    }
    async findAll(): Promise<NoteEntity[]> {
        return this.noteEntityRepository.find();
    }
    async save(noteEntity: CreateNoteDto): Promise<NoteEntity> {
        return this.noteEntityRepository.save(noteEntity);
    }
}
