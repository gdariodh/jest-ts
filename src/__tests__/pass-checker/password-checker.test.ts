import { PasswordChecker } from '../../app/pass-checker/password-checker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    // arrange
    sut = new PasswordChecker();
  });

  it('Should do nothing for the moment', () => {
    sut.checkPassword();
  });
});
