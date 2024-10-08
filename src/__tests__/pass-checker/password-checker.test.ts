import { PasswordChecker } from '../../app/pass-checker/password-checker';
import { PasswordErrors } from '../../models/pass-checker/pass-checker.model';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    // arrange
    sut = new PasswordChecker();
  });

  it('Password with less than 8 chars is invalid', () => {
    const actual = sut.checkPassword('1234567');
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it('Password with more than 8 chars is ok', () => {
    const actual = sut.checkPassword('12345678Aa');
    expect(actual.isValid).toBe(true);
  });

  it('Password with no upper case is invalid', () => {
    const actual = sut.checkPassword('1234abcd');
    expect(actual.isValid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with upper case letter is ok', () => {
    const actual = sut.checkPassword('1234abcdA');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with no lower case is invalid', () => {
    const actual = sut.checkPassword('1234ABCD');
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Password with lower case letter is ok', () => {
    const actual = sut.checkPassword('1234ABCDa');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Complex password is valid', () => {
    const actual = sut.checkPassword('1234abcD');
    expect(actual.reasons).toHaveLength(0);
    expect(actual.isValid).toBe(true);
  });

  it('Admin password with no number is invalid', () => {
    const actual = sut.checkAdminPassword('abcdABCD');
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    expect(actual.isValid).toBe(false);
  });

  it('Admin password with number is ok', () => {
    const actual = sut.checkAdminPassword('abcdABCD7');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
