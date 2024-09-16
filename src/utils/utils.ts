import { stringInfo } from '../models/utils.model';

export class StringUtils {
  public toUpperCase(value: string): string {
    if (!value) {
      throw new Error('Invalid argument!');
    }
    return toUpperCase(value);
  }
}

export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

// we add istanbul ignore next to ignore this function from coverage
/* istanbul ignore next */
export function getStringInfo(value: string): stringInfo {
  return {
    lowerCase: value.toLowerCase(),
    upperCase: value.toUpperCase(),
    characters: Array.from(value),
    length: value.length,
    extraInfo: {},
  };
}
