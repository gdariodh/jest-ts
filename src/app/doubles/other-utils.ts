import { stringInfo } from '../../models/doubles/other-utils.model';

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}
