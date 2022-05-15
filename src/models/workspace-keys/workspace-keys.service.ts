import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkSpaceKeyDto } from './dto/workspace-keys.dto';
import { WorkSpaceKey } from './workspace-key.entity';

@Injectable()
export class WorkSpaceKeyService {
  constructor(
    @InjectRepository(WorkSpaceKey)
    private WorkSpaceKeyRepository: Repository<WorkSpaceKey>,
  ) {}

  async createWorkSpaceKey(dto: CreateWorkSpaceKeyDto) {
    const workSpaceKey = await this.WorkSpaceKeyRepository.save(
      this.WorkSpaceKeyRepository.create(dto),
    );
    return workSpaceKey;
  }

  async getWorkSpaceKey(id) {
    const oneWorkSpaceKey = await this.WorkSpaceKeyRepository.findOne({
      id,
    });
    return oneWorkSpaceKey;
  }
  async getAllWorkSpaceKey() {
    const workSpaceKey = await this.WorkSpaceKeyRepository.find();
    return workSpaceKey;
  }
  async deleteWorkSpaceKey(id) {
    const deleteWorkSpaceKey =
      await this.WorkSpaceKeyRepository.createQueryBuilder()
        .delete()
        .from(WorkSpaceKey)
        .where('id = :id', { id: id })
        .execute();
    return `deleted:${id}${deleteWorkSpaceKey}`;
  }
  async updateWorkSpaceKey(id, workSpaceKeyDto) {
    const selectWorkSpaceKey =
      await this.WorkSpaceKeyRepository.createQueryBuilder()
        .update(WorkSpaceKey)
        .set({
          value: workSpaceKeyDto.value,
        })
        .where('id = :id', { id: id })
        .execute();
    return selectWorkSpaceKey;
  }
}
