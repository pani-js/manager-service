import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Permission } from '../permission.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('PermissionEntity', () => {
  describe('Fields', () => {
    let permissionRepoToken = getRepositoryToken(Permission);
    let fields: EntityFields<Permission>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: permissionRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      permissionRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have description', async () => {
      expect(fields.description).toBe(String);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });
  });
});
