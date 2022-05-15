import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { CreatePermissionDto } from './dto/permission.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionService: PermissionsService) {}
  @Post()
  create(@Body() permissionDto: CreatePermissionDto) {
    return this.permissionService.createPermission(permissionDto);
  }
  @Get()
  getAll() {
    return this.permissionService.getAllPermission();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionService.getPermission(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionService.deletePermission(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: CreatePermissionDto,
  ) {
    return this.permissionService.updatePermission(id, updatePermissionDto);
  }
}
