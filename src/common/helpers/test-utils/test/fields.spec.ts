import { Test, TestingModule } from '@nestjs/testing';
import { getEntityFields } from '../entity-fields';
import { EntityTestModule } from '../entity-test.module';

describe('Fields helpers', () => {
  let module: TestingModule;
  let mockedFunction;
  const testEntityMetadata = {
    propertyName: 'testName',
    type: typeof Number,
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({}).compile();
    mockedFunction = jest.fn(() => ({
      metadata: {
        ownColumns: [testEntityMetadata],
      },
    }));
    module.get = mockedFunction as typeof module.get;
  });

  it('should get fields of testEntityMetadata', () => {
    const fields = getEntityFields({ in: module, for: '' });

    expect(fields[0].name).toBe(testEntityMetadata.propertyName);
    expect(fields[0].type).toBe(testEntityMetadata.type);
  });

  it('should receive token in get function which placed in module', () => {
    const testForToken = 'test';
    getEntityFields({ in: module, for: testForToken });

    expect(mockedFunction.mock.calls[0][0]).toBe(testForToken);
  });
});
