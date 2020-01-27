import {Body, Controller, Get, HttpStatus, Inject, Post, Res, Response} from '@nestjs/common';
import {CreateNoteDto} from "./note.create.dto";
import {NoteEntity} from "./note.entity";
import {NoteMapper} from "./note.mapper";
import {NOTE_MAPPER, NOTE_SERVICE} from "./constants";
import {NoteService} from "./note.service";

@Controller('api/notes')
export class AppController {
  constructor(
      @Inject(NOTE_SERVICE)
      private readonly noteService: NoteService,
  ) {}

    @Get()
    async getNotes(): Promise<NoteEntity[]> {
      return this.noteService.findAll();
    }

    @Post()
    async saveNote(
        @Body() createNoteDto: CreateNoteDto
    ): Promise<NoteEntity> {
        return this.noteService.save(createNoteDto);
    }
}
