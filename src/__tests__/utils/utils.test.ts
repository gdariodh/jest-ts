import { getStringInfo, StringUtils, toUpperCase } from '../../utils/utils';

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

  describe('StringUtils test', () => {
    let sut: StringUtils;

    // jest hook
    // beforeEach, afterEach -> unit test
    // beforeAll, afterAll -> integration test

    // setup hook
    beforeEach(() => {
      // arrange
      sut = new StringUtils();
      // console.log('Setup');
    });

    // teardown hook - cleanup
    // afterEach(() => {
    // clearing mocks
    // sut = null;
    // console.log('Teardown');
    // });

    it('should return correct upperCase', () => {
      // act
      const actual = sut.toUpperCase('abc');
      // assert
      expect(actual).toBe('ABC');
      // console.log('Actual Test');
    });

    it('should throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError('Invalid argument!');
    });

    it('should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrow();

      expect(() => {
        sut.toUpperCase('');
      }).toThrowError('Invalid argument!');
    });

    it('should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        // add fail if no error - fail is thrown by jest when there is no error thrown
        done('StringUtils should throw error for invalid arg!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });

  describe('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      {
        input: 'My-String',
        expected: 'MY-STRING',
      },
      {
        input: 'def',
        expected: 'DEF',
      },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      // arrange
      const sut = toUpperCase;
      // act
      const actual = sut(input);
      // assert
      expect(actual).toBe(expected);
    });
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
