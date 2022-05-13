import { Module } from '@nestjs/common';
import { UnionTypesService } from './union-types.service';
import { UnionTypesController } from './union-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnionType } from './union-type.entity';

@Module({
  providers: [UnionTypesService],
  controllers: [UnionTypesController],
  imports: [TypeOrmModule.forFeature([UnionType])],
})
export class UnionTypesModule {}
