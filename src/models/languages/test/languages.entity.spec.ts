import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Language } from '../language.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('LanguageEntity', () => {
  describe('Fields', () => {
    let languageRepoToken = getRepositoryToken(Language);
    let fields: EntityFields<Language>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: languageRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      languageRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have locale', async () => {
      expect(fields.locale).toBe(String);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });
  });
});
