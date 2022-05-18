import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshToken } from './refresh-token.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class RefreshTokensService {
  constructor(
    @InjectRepository(RefreshToken)
    private refreshTokenRepository: Repository<RefreshToken>,
  ) {}

  public takeTokenFromString(token: string) {
    return token.split(';')[0].split('=')[1];
  }

  async createRefreshToken(dto: CreateRefreshTokenDto) {
    const refreshToken = await this.refreshTokenRepository.save(
      this.refreshTokenRepository.create(dto),
    );
    return refreshToken;
  }

  async getAllRefreshToken() {
    return this.refreshTokenRepository.find();
  }

  async getRefreshToken(id) {
    return this.refreshTokenRepository.findOne({
      id,
    });
  }

  async deleteRefreshToken(id) {
    const deleteRefreshToken = await this.refreshTokenRepository
      .createQueryBuilder()
      .delete()
      .from(RefreshToken)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deleteRefreshToken}`;
  }

  async updateRefreshToken(id, RefreshTokenDto) {
    const selectRefreshToken = await this.refreshTokenRepository
      .createQueryBuilder()
      .update(RefreshToken)
      .set({
        expireIn: RefreshTokenDto.expireIn,
        value: RefreshTokenDto.value,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectRefreshToken;
  }

  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const token = this.takeTokenFromString(refreshToken);
    const currentHashedRefreshToken = await bcrypt.hash(token, 10);
    await this.refreshTokenRepository
      .createQueryBuilder()
      .update(RefreshToken)
      .set({ value: currentHashedRefreshToken, user: { id: id } })
      .where('id = :id', { id: 1 })
      .execute();
  }
}
