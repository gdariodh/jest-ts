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

  describe('getStringInfo for arg My-String should', () => {
    it('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });

    it('return right lower case', () => {
      const actual = getStringInfo('My-String');
      // toBe - for primitive types
      expect(actual.lowerCase).toBe('my-string');
    });

    it('return right uppercase case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });

    it('return right characters', () => {
      const actual = getStringInfo('My-String');

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
    });

    it('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    });

    it('return right extra info', () => {
      const actual = getStringInfo('My-String');
      // toEqual - for objects
      expect(actual.extraInfo).toEqual({});
    });
  });
});
