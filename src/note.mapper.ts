import {CreateNoteDto} from "./note.dto.create";
import {NoteEntity} from "./note.entity";

export class NoteMapper {

    constructor() {
    }

    mapToEntity(createNoteDto: CreateNoteDto): NoteEntity {
        const noteEntity = new NoteEntity();
        noteEntity.title = createNoteDto.title;
        return noteEntity;
    }

}
