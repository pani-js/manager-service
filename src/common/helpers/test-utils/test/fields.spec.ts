import { Test, TestingModule } from '@nestjs/testing';
import { getEntityFields } from '../entity-fields';

describe('Fields helpers', () => {
  let module: TestingModule;
  let mockedFunction: ReturnType<typeof jest.fn>;
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

    expect(Object.keys(fields)[0]).toBe(testEntityMetadata.propertyName);
    expect(fields[testEntityMetadata.propertyName]).toBe(
      testEntityMetadata.type,
    );
  });

  it('should receive token in get function which placed in module', () => {
    const testForToken = 'test';
    getEntityFields({ in: module, for: testForToken });

    expect(mockedFunction.mock.calls[0][0]).toBe(testForToken);
  });
});
