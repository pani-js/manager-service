import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { UnionData } from '../union-data.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('UnionDataEntity', () => {
  describe('Fields', () => {
    let unionDataRepoToken = getRepositoryToken(UnionData);
    let fields: EntityFields<UnionData>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: unionDataRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      unionDataRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });

    it('should have description', async () => {
      expect(fields.description).toBe(String);
    });
  });
});
