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

export class OtherStringUtils {
  private callExternalService() {
    console.log('Calling external service...');
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
