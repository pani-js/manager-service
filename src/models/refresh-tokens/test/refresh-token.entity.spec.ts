import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { RefreshToken } from '../refresh-token.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('RefreshTokenEntity', () => {
  describe('Fields', () => {
    let refreshTokenRepoToken = getRepositoryToken(RefreshToken);
    let fields: EntityFields<RefreshToken>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: refreshTokenRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      refreshTokenRepoToken = null;
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
