import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from './language.entity';
import { CreateLanguageDto } from './dto/language.dto';
import { Repository } from 'typeorm';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}

  async createLanguage(dto: CreateLanguageDto) {
    const language = await this.languageRepository.save(
      this.languageRepository.create(dto),
    );
    return language;
  }

  async getLanguage(id) {
    const oneLanguage = await this.languageRepository.findOne({
      id,
    });
    return oneLanguage;
  }
  async getAllLanguage() {
    const languages = await this.languageRepository.find();
    return languages;
  }
  async deleteLanguage(id) {
    const deleteLanguage = await this.languageRepository
      .createQueryBuilder()
      .delete()
      .from(Language)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteLanguage}`;
  }
}
