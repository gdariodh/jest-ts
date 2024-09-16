export enum PasswordErrors {
  SHORT = 'Password is too short',
  NO_LOWER_CASE = 'Lower case letter required',
  NO_UPPER_CASE = 'Upper case letter required',
}

export interface CheckResult {
  isValid: boolean;
  reasons: PasswordErrors[];
}
