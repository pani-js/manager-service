import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '@/models/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_ACCESS_SECRET}`,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findUserById(payload.id);
    if (!user) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return { id: payload.id, email: payload.email };
  }
}
