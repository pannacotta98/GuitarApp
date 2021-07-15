import { combine } from './util';

test('combines correctly', () => {
  expect(combine([1, 2])).toEqual([[1], [2], [1, 2]]);
});
