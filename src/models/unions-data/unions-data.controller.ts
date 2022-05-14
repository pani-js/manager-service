import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateUnionDataDto } from './dto/unions-data.dto';
import { UnionsDataService } from './unions-data.service';

@Controller('unions-data')
export class UnionsDataController {
  constructor(private UnionDataService: UnionsDataService) {}
  @Post()
  create(@Body() UnionDataDto: CreateUnionDataDto) {
    return this.UnionDataService.createUnionData(UnionDataDto);
  }
  @Get()
  getAll() {
    return this.UnionDataService.getAllUnionData();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UnionDataService.getUnionData(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UnionDataService.deleteUnionData(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnionDataDto: CreateUnionDataDto,
  ) {
    return this.UnionDataService.updateUnionData(id, updateUnionDataDto);
  }
}
