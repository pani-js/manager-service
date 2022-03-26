import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.entity';
import { LanguageController } from './languages.controller';
import { LanguageService } from './languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}
