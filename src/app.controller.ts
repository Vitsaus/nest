import {Body, Controller, Get, HttpStatus, Inject, Post, Res, Response} from '@nestjs/common';
import { AppService } from './app.service';
import {CreateNoteDto} from "./note.create.dto";
import {NoteEntity} from "./note.entity";
import {NoteMapper} from "./note.mapper";
import {NOTE_MAPPER} from "./constants";

@Controller('api/notes')
export class AppController {
  constructor(
      private readonly appService: AppService,
      @Inject(NOTE_MAPPER)
      private readonly noteMapper: NoteMapper,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Get()
    async getNotes(): Promise<NoteEntity[]> {
      return this.appService.findAll();
    }

    @Post()
    async saveNote(
        @Body() createNoteDto: CreateNoteDto
    ): Promise<NoteEntity> {
        const noteEntity = this.noteMapper.mapToEntity(createNoteDto);
        return this.appService.save(noteEntity);
    }
}
