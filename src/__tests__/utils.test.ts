import { getStringInfo, toUpperCase } from '../utils/utils';

// AAA principles
// 1. Arrange - setup the test, 2. Act - execute the test, 3. Assert - check the result
// sut - system under test

describe('Utils test suite', () => {
  it('should return uppercase of valid string', () => {
    // arrange
    const sut = toUpperCase;
    const expected = 'ABC';
    // act
    const actual = sut('abc');
    // assert
    expect(actual).toBe(expected);
  });

  it('should return info for valid string', () => {
    const actual = getStringInfo('My-String');

    // toBe - for primitive types
    expect(actual.lowerCase).toBe('my-string');
    // toEqual - for objects
    expect(actual.extraInfo).toEqual({});

    // expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      'M',
      'y',
      '-',
      'S',
      't',
      'r',
      'i',
      'n',
      'g',
    ]);

    expect(actual.characters).toContain<string>('M');

    expect(actual.characters).toEqual(
      expect.arrayContaining(['M', 'y', 'S', 'g'])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
