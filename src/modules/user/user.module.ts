
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './user.service';
// import { UsersController } from './user.controller';
import { User } from './entity/user.enity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
controllers: [],
})
export class UsersModule {}