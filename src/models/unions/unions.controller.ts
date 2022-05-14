import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateUnionDto } from './dto/union.dto';
import { UnionsService } from './unions.service';

@Controller('unions')
export class UnionsController {
  constructor(private unionService: UnionsService) {}
  @Post()
  create(@Body() unionDto: CreateUnionDto) {
    return this.unionService.createUnion(unionDto);
  }
  @Get()
  getAll() {
    return this.unionService.getAllUnion();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unionService.getUnion(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unionService.deleteUnion(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUnionDto: CreateUnionDto) {
    return this.unionService.updateUnion(id, updateUnionDto);
  }
}
