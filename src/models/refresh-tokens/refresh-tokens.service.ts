import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
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

  public takeExpireInFromString(token: string) {
    const dateNow = new Date();
    const tokenTime = token.split(';')[3].split('=')[1].slice(0, -1);
    const endtime = new Date(+dateNow + +tokenTime * 6e4);
    return endtime;
  }

  async createRefreshToken(fullToken, id) {
    const headerToken = await this.takeTokenFromString(fullToken);
    const expireIn = await this.takeExpireInFromString(fullToken);
    const refreshObj = {
      value: headerToken,
      expireIn: expireIn,
      user: {
        id,
      },
    };
    console.log(refreshObj);
    const refreshToken = await this.refreshTokenRepository.save(
      this.refreshTokenRepository.create(refreshObj),
    );
    return refreshToken;
  }

  async getAllRefreshToken() {
    return this.refreshTokenRepository.find();
  }

  async getRefreshTokenById(id) {
    const user = this.refreshTokenRepository.findOne({
      id,
    });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
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

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.getRefreshTokenById(userId);

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.value,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
