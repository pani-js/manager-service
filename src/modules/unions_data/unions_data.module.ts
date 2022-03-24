import { Module } from '@nestjs/common';
import { UnionsDataController } from './unions_data.controller';

@Module({
  controllers: [UnionsDataController]
})
export class UnionsDataModule {}
