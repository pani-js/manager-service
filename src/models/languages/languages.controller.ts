import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateLanguageDto } from './dto/language.dto';
import { LanguageService } from './languages.service';

@Controller('language')
export class LanguageController {
  constructor(private languageService: LanguageService) {}

  @Post()
  create(@Body() languageDto: CreateLanguageDto) {
    return this.languageService.createLanguage(languageDto);
  }

  @Get()
  getAll() {
    return this.languageService.getAllLanguage();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.getLanguage(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.deleteLanguage(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: CreateLanguageDto,
  ) {
    return this.languageService.updateLanguage(id, updateLanguageDto);
  }
}
