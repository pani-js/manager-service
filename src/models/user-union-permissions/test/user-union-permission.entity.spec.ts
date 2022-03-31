import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { UserUnionPermission } from '../user-union-permission.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('UserUnionPermissionEntity', () => {
  describe('Fields', () => {
    let userUnionPermissionRepoToken = getRepositoryToken(UserUnionPermission);
    let fields: EntityFields<UserUnionPermission>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: userUnionPermissionRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      userUnionPermissionRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have permissions', async () => {
      expect(fields.permission).toBe('simple-array');
    });

    it('should have roles', async () => {
      expect(fields.roles).toBe('simple-array');
    });
  });
});
