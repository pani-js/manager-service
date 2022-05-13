import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshToken } from './refresh-token.entity';

@Injectable()
export class RefreshTokensService {
  constructor(
    @InjectRepository(RefreshToken)
    private RefreshTokenRepository: Repository<RefreshToken>,
  ) {}
  async createRefreshToken(dto: CreateRefreshTokenDto) {
    const refreshToken = await this.RefreshTokenRepository.save(
      this.RefreshTokenRepository.create(dto),
    );
    return refreshToken;
  }
  async getAllRefreshToken() {
    return this.RefreshTokenRepository.find();
  }
  async getRefreshToken(id) {
    return this.RefreshTokenRepository.findOne({
      id,
    });
  }
  async deleteRefreshToken(id) {
    const deleteRefreshToken =
      await this.RefreshTokenRepository.createQueryBuilder()
        .delete()
        .from(RefreshToken)
        .where('id = :id', { id: id })
        .execute();
    return `deleted:${id}${deleteRefreshToken}`;
  }
  async updateRefreshToken(id, RefreshTokenDto) {
    const selectRefreshToken =
      await this.RefreshTokenRepository.createQueryBuilder()
        .update(RefreshToken)
        .set({
          maxMembers: RefreshTokenDto.maxMembers,
          name: RefreshTokenDto.name,
        })
        .where('id = :id', { id: id })
        .execute();
    return selectRefreshToken;
  }
}
