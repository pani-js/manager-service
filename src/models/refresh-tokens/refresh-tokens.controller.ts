import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { CreateRefreshTokenDto } from './dto/refresh-token.dto';
import { RefreshTokensService } from './refresh-tokens.service';

@Controller('refresh-tokens')
export class RefreshTokensController {
  constructor(private refreshTokenService: RefreshTokensService) {}

  @Get()
  getAll() {
    return this.refreshTokenService.getAllRefreshToken();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refreshTokenService.getRefreshTokenById(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refreshTokenService.deleteRefreshToken(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRefreshTokenDto: CreateRefreshTokenDto,
  ) {
    return this.refreshTokenService.updateRefreshToken(
      id,
      updateRefreshTokenDto,
    );
  }
}
