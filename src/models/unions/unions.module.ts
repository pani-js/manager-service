import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnionsService } from './unions.service';
import { UnionsController } from './unions.controller';
import { Unions } from './entity/unions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unions])],
  providers: [UnionsService],
  controllers: [UnionsController],
})
export class UnionsModule {}
