import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { WorkSpaceKey } from '../workspace-key.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('WorkSpaceKeyEntity', () => {
  describe('Fields', () => {
    let userRepoToken = getRepositoryToken(WorkSpaceKey);
    let fields: EntityFields<WorkSpaceKey>;
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

    it('should have value', async () => {
      expect(fields.value).toBe(String);
    });
  });
});
