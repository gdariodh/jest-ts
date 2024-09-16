import {
  CheckResult,
  PasswordErrors,
} from '../../models/pass-checker/pass-checker.model';

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    let reasons: PasswordErrors[] = [];

    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }

    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }

    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }

    return {
      isValid: reasons.length > 0 ? false : true,
      reasons,
    };
  }
}
