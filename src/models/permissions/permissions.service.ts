import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePermissionDto } from './dto/permission.dto';
import { Permission } from './permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async createPermission(dto: CreatePermissionDto) {
    const language = await this.permissionRepository.save(
      this.permissionRepository.create(dto),
    );
    return language;
  }

  async getPermission(id) {
    const oneLanguage = await this.permissionRepository.findOne({
      id,
    });
    return oneLanguage;
  }
  async getAllPermission() {
    const languages = await this.permissionRepository.find();
    return languages;
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
    const updatedPermission = await this.permissionRepository
      .createQueryBuilder()
      .update(Permission)
      .set({
        description: PermissionDto.locale,
        name: PermissionDto.name,
      })
      .where('id = :id', { id: id })
      .execute();
    return updatedPermission;
  }
}
