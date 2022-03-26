import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityTestModule } from '@helpers/test-utils/entity-test.module';
import { User } from '../user.entity';

describe('UserEntity', () => {
  describe('Fields', () => {
    const userRepoToken = getRepositoryToken(User);
    let userRepo: Repository<User>;
    let user: User;

    beforeAll(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [EntityTestModule],
      }).compile();

      userRepo = module.get(userRepoToken);
      await userRepo.save(userRepo.create());
    });

    afterAll(() => {
      // userRepo.clear();
    });

    it('should have id', async () => {
      console.log(await userRepo.findAndCount());
    });
  });
});
