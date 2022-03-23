import { Module } from '@nestjs/common';
import { UnionTypesService } from './union_types.service';
import { UnionTypesController } from './union_types.controller';

@Module({
  providers: [UnionTypesService],
  controllers: [UnionTypesController]
})
export class UnionTypesModule {}
