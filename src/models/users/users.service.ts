import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.save(
      this.userRepository.create(dto),
    );
    return user;
  }
  async findUserById(id): Promise<User> {
    const user = await this.userRepository.findOne({
      id,
    });
    if (!user) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return user;
  }
  async findUserByEmail(email) {
    const user = await this.userRepository.findOne({
      email,
    });
    if (!user) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return user;
  }
}
