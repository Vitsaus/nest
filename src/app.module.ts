import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {noteProviders} from "./note.providers";
import {databaseProviders} from "./database.providers";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [...databaseProviders, ...noteProviders],
})
export class AppModule {}
