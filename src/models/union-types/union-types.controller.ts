import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateUnionTypesDto } from './dto/union-types.dto';
import { UnionTypesService } from './union-types.service';

@Controller('union-types')
export class UnionTypesController {
  constructor(private unionTypeService: UnionTypesService) {}
  @Post()
  create(@Body() UnionTypeDto: CreateUnionTypesDto) {
    return this.unionTypeService.createUnionType(UnionTypeDto);
  }
  @Get()
  getAll() {
    return this.unionTypeService.getAllUnionType();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unionTypeService.getUnionType(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unionTypeService.deleteUnionType(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnionTypeDto: CreateUnionTypesDto,
  ) {
    return this.unionTypeService.updateUnionType(id, updateUnionTypeDto);
  }
}
