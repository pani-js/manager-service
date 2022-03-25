import { User } from '../user.entity';

describe('UserEntity', () => {
  describe('Fields', () => {
    let user: User;

    beforeAll(() => {
      user = new User();
    });

    afterAll(() => {
      user = undefined;
    });

    it('should have id', () => {
      expect(user.id).not.toBe(undefined);
    });
  });
});
