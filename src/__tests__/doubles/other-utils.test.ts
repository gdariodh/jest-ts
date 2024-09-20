import {
  calculateComplexity,
  toUpperCaseWithCb,
} from '../../app/doubles/other-utils';

describe('OtherUtils test suite', () => {
  it('ToUpperCase - calls callback for invalid argument', () => {
    const actual = toUpperCaseWithCb('', () => {});
    expect(actual).toBeUndefined();
  });

  it('ToUpperCase - calls callback is ok', () => {
    const actual = toUpperCaseWithCb('abc', () => {});
    expect(actual).toBe('ABC');
  });

  it('Calculate complexity', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo',
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });

  describe('Tracking callbacks', () => {
    let cbArgs = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      // clearing tracking fields
      cbArgs = [];
      timesCalled = 0;
    });

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('Invalid argument!');
      expect(timesCalled).toBe(1);
    });

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(cbArgs).toContain('called function with abc');
      expect(timesCalled).toBe(1);
    });
  });

  describe('Tracking callbacks with Jest mocks', () => {
    const callbackMock = jest.fn();

    afterEach(() => {
      // clearing tracking fields
      callbackMock.mockClear();
    });

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      // deprecated:  expect(callbackMock).toBeCalledWith('Invalid argument!');
      expect(callbackMock).toHaveBeenCalledWith('Invalid argument!');
      // deprecated:  expect(callbackMock).toBeCalledTimes(1)
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toHaveBeenCalledWith('called function with abc');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });
});
