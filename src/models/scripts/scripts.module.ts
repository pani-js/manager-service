import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Script } from './script.entity';
import { ScriptsController } from './scripts.controller';
import { ScriptsService } from './scripts.service';

@Module({
  providers: [ScriptsService],
  controllers: [ScriptsController],
  imports: [TypeOrmModule.forFeature([Script])],
})
export class ScriptsModule {}
