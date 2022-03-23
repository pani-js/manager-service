import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';



@Module({
    imports: [TypeOrmModule.forFeature()],
    providers: [LanguageService],
    controllers: [LanguageController],

})
export class LanguageModule { }