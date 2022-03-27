import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Union } from '../union.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('UnionEntity', () => {
  describe('Fields', () => {
    let unionRepoToken = getRepositoryToken(Union);
    let fields: EntityFields<Union>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({ in: module, for: unionRepoToken as string });
    });

    afterAll(() => {
      module = null;
      fields = null;
      unionRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have location', async () => {
      expect(fields.location).toBe(String);
    });

    it('should have logo', async () => {
      expect(fields.logo).toBe(String);
    });
  });
});
