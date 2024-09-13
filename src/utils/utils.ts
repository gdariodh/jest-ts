import { stringInfo } from '../models/utils.model';

export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

export function getStringInfo(value: string): stringInfo {
  return {
    lowerCase: value.toLowerCase(),
    upperCase: value.toUpperCase(),
    characters: Array.from(value),
    length: value.length,
    extraInfo: {},
  };
}
