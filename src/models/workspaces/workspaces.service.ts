import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkSpaceDto } from './dto /workspace.dto';
import { Workspace } from './workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private WorkSpaceRepository: Repository<Workspace>,
  ) {}

  async createWorkSpace(dto: CreateWorkSpaceDto) {
    const WorkSpace = await this.WorkSpaceRepository.save(
      this.WorkSpaceRepository.create(dto),
    );
    return WorkSpace;
  }

  async getWorkSpace(id) {
    const oneWorkSpace = await this.WorkSpaceRepository.findOne({
      id,
    });
    return oneWorkSpace;
  }
  async getAllWorkSpace() {
    const WorkSpaces = await this.WorkSpaceRepository.find();
    return WorkSpaces;
  }
  async deleteWorkSpace(id) {
    const deleteWorkSpace = await this.WorkSpaceRepository.createQueryBuilder()
      .delete()
      .from(Workspace)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteWorkSpace}`;
  }
  async updateWorkSpace(id, workSpaceDto) {
    const selectWorkSpace = await this.WorkSpaceRepository.createQueryBuilder()
      .update(Workspace)
      .set({
        name: workSpaceDto.name,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectWorkSpace;
  }
}
