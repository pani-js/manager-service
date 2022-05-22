import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { RefreshTokensService } from '@/models/refresh-tokens/refresh-tokens.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private readonly refreshServiceService: RefreshTokensService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          const token = this.refreshServiceService.takeTokenFromString(
            request?.headers?.cookie,
          );
          return token;
        },
      ]),
      secretOrKey: `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
      passReqToCallback: true,
    });
  }

  async validate(request, payload) {
    console.log(request);
    const refreshToken = request?.headers?.cookie;
    return this.refreshServiceService.getUserIfRefreshTokenMatches(
      refreshToken,
      payload.id,
    );
  }
}
