import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {noteProviders} from "./note.providers";
import {databaseProviders} from "./database.providers";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [...databaseProviders, ...noteProviders, AppService],
})
export class AppModule {}
