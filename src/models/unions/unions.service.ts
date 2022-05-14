import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnionDto } from './dto/union.dto';
import { Union } from './union.entity';

@Injectable()
export class UnionsService {
  constructor(
    @InjectRepository(Union)
    private unionRepository: Repository<Union>,
  ) {}
  async createUnion(dto: CreateUnionDto) {
    console.log(dto);
    const union = await this.unionRepository.save(
      this.unionRepository.create(dto),
    );
    return union;
  }
  async getUnion(id) {
    const oneUnion = await this.unionRepository.findOne({
      id,
    });
    return oneUnion;
  }
  async getAllUnion() {
    const unions = await this.unionRepository.find();
    return unions;
  }
  async deleteUnion(id) {
    const deleteUnion = await this.unionRepository
      .createQueryBuilder()
      .delete()
      .from(Union)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteUnion}`;
  }
  async updateUnion(id, UnionDto) {
    const selectUnion = await this.unionRepository
      .createQueryBuilder()
      .update(Union)
      .set({
        location: UnionDto.location,
        logo: UnionDto.logo,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectUnion;
  }
}
