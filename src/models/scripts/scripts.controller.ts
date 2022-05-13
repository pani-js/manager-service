import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateScriptDto } from './dto/script.dto';
import { ScriptsService } from './scripts.service';

@Controller('scripts')
export class ScriptsController {
  constructor(private ScriptService: ScriptsService) {}
  @Post()
  create(@Body() ScriptDto: CreateScriptDto) {
    return this.ScriptService.createScript(ScriptDto);
  }
  @Get()
  getAll() {
    return this.ScriptService.getAllScript();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ScriptService.getScript(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ScriptService.deleteScript(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateScriptDto: CreateScriptDto) {
    return this.ScriptService.updateScript(id, updateScriptDto);
  }
}
