import { Module } from '@nestjs/common';
import { RefreshTokensService } from './refresh-tokens.service';
import { RefreshTokensController } from './refresh-tokens.controller';

@Module({
  providers: [RefreshTokensService],
  controllers: [RefreshTokensController],
})
export class RefreshTokensModule {}
