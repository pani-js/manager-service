import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageController } from './languages.controller';
import { LanguageService } from './languages.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}
