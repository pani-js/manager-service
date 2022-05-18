import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
// import { compareSync } from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | undefined> {
    const user: User = await this.userService.findUserByEmail(email);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userInfo } = user;
      return userInfo;
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  public getCookieWithJwtAccessToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: `${process.env.JWT_ACCESS_SECRET}`,
      expiresIn: `${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}h`,
    });
    const authCookie = `Authentication=${token}; HttpOnly; Path=/; Max-Age=${process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME}h`;
    return authCookie;
  }
  public getCookieWithJwtRefreshToken(id: number) {
    const payload = { id };
    const token = this.jwtService.sign(payload, {
      secret: `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
      expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}h`,
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME}h`;
    return cookie;
  }

  async signUp(user) {
    const verifyUser = await this.userService.findUserForRegistration(user);
    return verifyUser;
  }
}
