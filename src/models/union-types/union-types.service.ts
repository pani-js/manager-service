import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnionTypesDto } from './dto/union-types.dto';
import { UnionType } from './union-type.entity';

@Injectable()
export class UnionTypesService {
  constructor(
    @InjectRepository(UnionType)
    private unionTypeRepository: Repository<UnionType>,
  ) {}

  async createUnionType(dto: CreateUnionTypesDto) {
    const unionType = await this.unionTypeRepository.save(
      this.unionTypeRepository.create(dto),
    );
    return unionType;
  }

  async getUnionType(id) {
    const oneUnionType = await this.unionTypeRepository.findOne({
      id,
    });
    return oneUnionType;
  }
  async getAllUnionType() {
    const unionTypes = await this.unionTypeRepository.find();
    return unionTypes;
  }
  async deleteUnionType(id) {
    const deleteUnionType = await this.unionTypeRepository
      .createQueryBuilder()
      .delete()
      .from(UnionType)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteUnionType}`;
  }
  async updateUnionType(id, unionTypeDto) {
    const selectUnionType = await this.unionTypeRepository
      .createQueryBuilder()
      .update(UnionType)
      .set({
        maxMembers: unionTypeDto.maxMembers,
        name: unionTypeDto.name,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectUnionType;
  }
}
