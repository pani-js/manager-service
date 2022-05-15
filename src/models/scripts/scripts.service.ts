import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScriptDto } from './dto/script.dto';
import { Script } from './script.entity';

@Injectable()
export class ScriptsService {
  constructor(
    @InjectRepository(Script)
    private scriptRepository: Repository<Script>,
  ) {}

  async createScript(dto: CreateScriptDto) {
    const script = await this.scriptRepository.save(
      this.scriptRepository.create(dto),
    );
    return script;
  }

  async getScript(id) {
    const oneScript = await this.scriptRepository.findOne({
      id,
    });
    return oneScript;
  }
  async getAllScript() {
    const scripts = await this.scriptRepository.find();
    return scripts;
  }
  async deleteScript(id) {
    const deleteScript = await this.scriptRepository
      .createQueryBuilder()
      .delete()
      .from(Script)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteScript}`;
  }
  async updateScript(id, ScriptDto) {
    const selectScript = await this.scriptRepository
      .createQueryBuilder()
      .update(Script)
      .set({
        path: ScriptDto.path,
        description: ScriptDto.description,
        name: ScriptDto.name,
        isPublic: ScriptDto.isPublic,
        createdAt: ScriptDto.createdAt,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectScript;
  }
}
