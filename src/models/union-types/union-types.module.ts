import { Module } from '@nestjs/common';
import { UnionTypesService } from './union-types.service';
import { UnionTypesController } from './union-types.controller';

@Module({
  providers: [UnionTypesService],
  controllers: [UnionTypesController],
})
export class UnionTypesModule {}
