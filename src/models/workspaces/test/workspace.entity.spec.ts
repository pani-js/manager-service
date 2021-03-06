import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { Workspace } from '../workspace.entity';
import { EntityFields } from '@our-types/tests';
import { getEntityFields } from '@helpers/test-utils/entity-fields';

describe('WorkspaceEntity', () => {
  describe('Fields', () => {
    let workspaceRepoToken = getRepositoryToken(Workspace);
    let fields: EntityFields<Workspace>;
    let module: TestingModule;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      fields = getEntityFields({
        in: module,
        for: workspaceRepoToken as string,
      });
    });

    afterAll(() => {
      module = null;
      fields = null;
      workspaceRepoToken = null;
    });

    it('should have id', async () => {
      expect(fields.id).toBe(Number);
    });

    it('should have name', async () => {
      expect(fields.name).toBe(String);
    });
  });
});
