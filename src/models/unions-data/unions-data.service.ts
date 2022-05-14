import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnionDataDto } from './dto/unions-data.dto';
import { UnionData } from './union-data.entity';

@Injectable()
export class UnionsDataService {
  constructor(
    @InjectRepository(UnionData)
    private unionDataRepository: Repository<UnionData>,
  ) {}

  async createUnionData(dto: CreateUnionDataDto) {
    const unionData = await this.unionDataRepository.save(
      this.unionDataRepository.create(dto),
    );
    return unionData;
  }

  async getUnionData(id) {
    const oneUnionData = await this.unionDataRepository.findOne({
      id,
    });
    return oneUnionData;
  }
  async getAllUnionData() {
    const unionData = await this.unionDataRepository.find();
    return unionData;
  }
  async deleteUnionData(id) {
    const deleteUnionData = await this.unionDataRepository
      .createQueryBuilder()
      .delete()
      .from(UnionData)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteUnionData}`;
  }
  async updateUnionData(id, unionDataDto) {
    const selectUnionData = await this.unionDataRepository
      .createQueryBuilder()
      .update(UnionData)
      .set({
        name: unionDataDto.name,
        description: unionDataDto.description,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectUnionData;
  }
}
