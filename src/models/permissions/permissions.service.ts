import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDto } from './dto/permission.dto';
import { Permission } from './permissions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async createPermission(dto: CreatePermissionDto) {
    const permission = await this.permissionRepository.save(
      this.permissionRepository.create(dto),
    );
    return permission;
  }

  async getPermission(id) {
    const onePermission = await this.permissionRepository.findOne({
      id,
    });
    return onePermission;
  }
  async getAllPermission() {
    const permissions = await this.permissionRepository.find();
    return permissions;
  }
  async deletePermission(id) {
    const deletePermission = await this.permissionRepository
      .createQueryBuilder()
      .delete()
      .from(Permission)
      .where('id = :id', { id: id })
      .execute();
    return `deleted:${id}${deletePermission}`;
  }
  async updatePermission(id, PermissionDto) {
    const selectPermission = await this.permissionRepository
      .createQueryBuilder()
      .update(Permission)
      .set({
        description: PermissionDto.description,
        name: PermissionDto.name,
      })
      .where('id = :id', { id: id })
      .execute();
    return selectPermission;
  }
}
