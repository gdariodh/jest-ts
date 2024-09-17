import {
  CheckResult,
  PasswordErrors,
} from '../../models/pass-checker/pass-checker.model';

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    let reasons: PasswordErrors[] = [];

    this.checkForLength(password, reasons);

    this.checkForLowerCase(password, reasons);

    this.checkForUpperCase(password, reasons);

    return {
      isValid: reasons.length > 0 ? false : true,
      reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const basicCheck = this.checkPassword(password);
    this.checkForNumber(password, basicCheck.reasons);

    return {
      isValid: basicCheck.reasons.length === 0,
      reasons: basicCheck.reasons,
    };
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]): void {
    const hasNumber = /\d/;

    if (!hasNumber.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }

  private checkForLength(password: string, reasons: PasswordErrors[]): void {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }

  private checkForUpperCase(password: string, reasons: PasswordErrors[]): void {
    if (password === password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }

  private checkForLowerCase(password: string, reasons: PasswordErrors[]): void {
    if (password === password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }
}
