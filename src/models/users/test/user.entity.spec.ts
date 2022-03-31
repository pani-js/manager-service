import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { User } from '../user.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('UserEntity', () => {
  describe('Fields', () => {
    let userRepoToken = getRepositoryToken(User);
    let fields: EntityFields<User>;
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

    it('should have username', async () => {
      expect(fields.username).toBe(String);
    });

    it('should have firstName', async () => {
      expect(fields.firstName).toBe(String);
    });

    it('should have lastName', async () => {
      expect(fields.lastName).toBe(String);
    });

    it('should have position', async () => {
      expect(fields.position).toBe(String);
    });

    it('should have email', async () => {
      expect(fields.email).toBe(String);
    });

    it('should have password', async () => {
      expect(fields.password).toBe(String);
    });

    it('should have avatar', async () => {
      expect(fields.avatar).toBe(String);
    });

    it('should have verified', async () => {
      expect(fields.verified).toBe(Boolean);
    });
  });
});
