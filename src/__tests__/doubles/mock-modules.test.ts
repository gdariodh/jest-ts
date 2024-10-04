jest.mock('../../app/doubles/other-utils', () => ({
  // keep the original module functionality
  ...jest.requireActual('../../app/doubles/other-utils'),
  //   custom implementation
  calculateComplexity: () => {
    return 10;
  },
}));

jest.mock('uuid', () => ({
  v4: () => '123',
}));

import * as OtherUtils from '../../app/doubles/other-utils';

describe.only('module tests', () => {
  it('calculate complexity', () => {
    const actual = OtherUtils.calculateComplexity({} as any);
    expect(actual).toBe(10);
  });

  it('keep other functions', () => {
    const actual = OtherUtils.toUpperCase('abc');
    expect(actual).toBe('ABC');
  });

  it('string with id', () => {
    const actual = OtherUtils.toLowerCaseWithId('ABC');
    expect(actual).toBe('abc123');
  });
});
