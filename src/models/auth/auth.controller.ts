import {
  Controller,
  Post,
  Request,
  UseGuards,
  ForbiddenException,
  Get,
  Req,
} from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { RefreshTokensService } from '../refresh-tokens/refresh-tokens.service';
import JwtRefreshGuard from './guard/jwtRefreshGuard';
@Controller('auth')
export class AuthController {
  constructor(
    private refreshService: RefreshTokensService,
    private authService: AuthService,
  ) {}

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

    await this.refreshService.setCurrentRefreshToken(
      refreshTokenCookie,
      user.id,
    );
    await request.res.setHeader('Set-RefCookie', refreshTokenCookie);
    await request.res.setHeader('Set-AuthCookie', accessTokenCookie);
    return user;
  }

  @Post('signUp')
  async signUp(@Request() request) {
    const { body, res } = request;
    const addedUser = await this.authService.signUp(body);
    if (!addedUser) {
      throw new ForbiddenException('Your email or username Already in Use');
    }

    const accessTokenCookie =
      await this.authService.getCookieWithJwtAccessToken(addedUser.id);

    const refreshTokenCookie =
      await this.authService.getCookieWithJwtRefreshToken(addedUser.id);

    await this.refreshService.createRefreshToken(
      refreshTokenCookie,
      addedUser.id,
    );

    await res.setHeader('Set-RefCookie', refreshTokenCookie);
    await res.setHeader('Set-AuthCookie', accessTokenCookie);
    return addedUser;
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() request) {
    console.log(request);
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      request.user.id,
    );

    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return request.user;
  }
}
