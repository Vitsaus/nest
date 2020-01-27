import {Inject, Injectable} from '@nestjs/common';
import {NOTE_MAPPER, NOTE_REPOSITORY} from "./constants";
import {Repository} from "typeorm";
import {NoteEntity} from "./note.entity";
import {CreateNoteDto} from "./note.dto.create";
import {NoteMapper} from "./note.mapper";

@Injectable()
export class NoteService {
    constructor(
        @Inject(NOTE_MAPPER)
        private readonly noteMapper: NoteMapper,
        @Inject(NOTE_REPOSITORY)
        private readonly noteEntityRepository: Repository<NoteEntity>,
    ) {}
    async findAll(): Promise<NoteEntity[]> {
        return this.noteEntityRepository.find();
    }
    async save(createNoteDto: CreateNoteDto): Promise<NoteEntity> {
        const noteEntity = this.noteMapper.mapToEntity(createNoteDto);
        return this.noteEntityRepository.save(noteEntity);
    }
}
