import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnionData } from './union-data.entity';
import { UnionsDataController } from './unions-data.controller';
import { UnionsDataService } from './unions-data.service';

@Module({
  controllers: [UnionsDataController],
  providers: [UnionsDataService],
  imports: [TypeOrmModule.forFeature([UnionData])],
})
export class UnionsDataModule {}
