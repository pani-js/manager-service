import { Module } from '@nestjs/common';
import { UnionsDataController } from './unions-data.controller';

@Module({
  controllers: [UnionsDataController],
})
export class UnionsDataModule {}
