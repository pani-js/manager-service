import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { UnionType } from '../union-type.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('UnionTypeEntity', () => {
  describe('Fields', () => {
    let unionTypeRepoToken = getRepositoryToken(UnionType);
    let fields: EntityFields<UnionType>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: unionTypeRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      unionTypeRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have maxMembers', async () => {
      expect(fields.maxMembers).toBe(Number);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });
  });
});
