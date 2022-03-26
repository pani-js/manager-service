import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Permission } from '../permission.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('UserEntity', () => {
  describe('Fields', () => {
    let userRepoToken = getRepositoryToken(Permission);
    let fields: EntityFields<Permission>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({ in: module, for: userRepoToken as string });
    });

    afterAll(() => {
      module = null;
      fields = null;
      userRepoToken = null;
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
