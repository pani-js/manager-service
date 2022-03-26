import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { RefreshToken } from '../refresh-token.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('RefreshTokenEntity', () => {
  describe('Fields', () => {
    let userRepoToken = getRepositoryToken(RefreshToken);
    let fields: EntityFields<RefreshToken>;
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

    it('should have maxMembers', async () => {
      expect(fields.maxMembers).toBe(Number);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });
  });
});
