import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateWorkSpaceKeyDto } from './dto/workspace-keys.dto';
import { WorkSpaceKeyService } from './workspace-keys.service';

@Controller('workspace-keys')
export class WorkspaceKeysController {
  constructor(private workSpaceKeyService: WorkSpaceKeyService) {}
  @Post()
  create(@Body() WorkSpaceKeyDto: CreateWorkSpaceKeyDto) {
    return this.workSpaceKeyService.createWorkSpaceKey(WorkSpaceKeyDto);
  }
  @Get()
  getAll() {
    return this.workSpaceKeyService.getAllWorkSpaceKey();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSpaceKeyService.getWorkSpaceKey(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workSpaceKeyService.deleteWorkSpaceKey(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkSpaceKeyDto: CreateWorkSpaceKeyDto,
  ) {
    return this.workSpaceKeyService.updateWorkSpaceKey(
      id,
      updateWorkSpaceKeyDto,
    );
  }
}
