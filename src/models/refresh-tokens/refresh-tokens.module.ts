import { Module } from '@nestjs/common';
import { RefreshTokensService } from './refresh-tokens.service';
import { RefreshTokensController } from './refresh-tokens.controller';
import { RefreshToken } from './refresh-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  providers: [RefreshTokensService],
  controllers: [RefreshTokensController],
  imports: [TypeOrmModule.forFeature([RefreshToken])],
})
export class RefreshTokensModule {}
