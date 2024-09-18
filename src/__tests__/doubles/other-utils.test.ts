import { calculateComplexity } from '../../app/doubles/other-utils';
import { stringInfo } from '../../models/doubles/other-utils.model';

describe('OtherUtils test suite', () => {
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
});
