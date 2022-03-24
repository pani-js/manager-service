import { Module } from '@nestjs/common';
import { RefreshTokensService } from './refresh_tokens.service';
import { RefreshTokensController } from './refresh_tokens.controller';

@Module({
  providers: [RefreshTokensService],
  controllers: [RefreshTokensController]
})
export class RefreshTokensModule {}
