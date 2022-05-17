import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RefreshTokensService } from '../refresh-tokens/refresh-tokens.service';
@Controller('auth')
export class AuthController {
  constructor(
    private refreshService: RefreshTokensService,
    private authService: AuthService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('user')
  // async getUser(@Request() req) {
  //   return this.authService.validateUser(req.user.email, req.user.password);
  // }
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async logIn(@Request() request) {
    const { user } = request;
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      user.id,
    );
    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(
      user.id,
    );
    const { token, cookie } = refreshTokenCookie;
    await this.refreshService.setCurrentRefreshToken(token, user.id);

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return user;
  }
}
