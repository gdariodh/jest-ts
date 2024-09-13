import { toUpperCase } from '../app/utils';

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
});
