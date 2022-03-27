import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnionsService } from './unions.service';
import { UnionsController } from './unions.controller';
import { Union } from './union.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Union])],
  providers: [UnionsService],
  controllers: [UnionsController],
})
export class UnionsModule {}
