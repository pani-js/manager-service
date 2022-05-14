import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto /workspace.dto';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private WorkSpaceService: WorkspacesService) {}
  @Post()
  create(@Body() WorkSpaceDto: CreateWorkSpaceDto) {
    return this.WorkSpaceService.createWorkSpace(WorkSpaceDto);
  }
  @Get()
  getAll() {
    return this.WorkSpaceService.getAllWorkSpace();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.WorkSpaceService.getWorkSpace(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.WorkSpaceService.deleteWorkSpace(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkSpaceDto: CreateWorkSpaceDto,
  ) {
    return this.WorkSpaceService.updateWorkSpace(id, updateWorkSpaceDto);
  }
}
