import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  // @Get(':id')
  // findUserById(@Param('id') id: string) {
  //   return this.userService.findUserById(id);
  // }

  @Get(':email')
  findUserByEmail(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }
}
