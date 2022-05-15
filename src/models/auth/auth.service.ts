import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findUserByEmail(email);
    if (user && compareSync(password, user.password)) {
      return user;
    }
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  async login(user) {
    const payload = {
      username: user.username,
      firstName: user.firstName,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
