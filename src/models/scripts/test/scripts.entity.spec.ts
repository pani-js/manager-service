import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Script } from '../script.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@/common/helpers/test-utils/entity-fields';

describe('ScriptEntity', () => {
  describe('Fields', () => {
    let scriptRepoToken = getRepositoryToken(Script);
    let fields: EntityFields<Script>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({ in: module, for: scriptRepoToken as string });
    });

    afterAll(() => {
      module = null;
      fields = null;
      scriptRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have path', async () => {
      expect(fields.path).toBe(String);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });

    it('should have description', async () => {
      expect(fields.description).toBe(String);
    });

    it('should have isPublic', async () => {
      expect(fields.isPublic).toBe(Boolean);
    });

    it('should have createdAt', async () => {
      expect(fields.createdAt).toBe(String);
    });
  });
});
