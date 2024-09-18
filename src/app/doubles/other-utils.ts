import { stringInfo } from '../../models/doubles/other-utils.model';

export type LoggerServiceCallback = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(
  arg: string,
  callback: LoggerServiceCallback
) {
  if (!arg) {
    callback('Invalid argument!');
    return;
  }

  callback(`called function with ${arg}`);

  return arg.toUpperCase();
}
