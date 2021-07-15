import { Tuning } from './Tuning';

// test('creation of tuning from string', () => {
//   expect(Tuning.fromNotes('E2 A2 D3 G3 B3 E4')).toEqual()
// });

test('only 6 string tunings can be created', () => {
  expect(() => Tuning.fromNotes('G3 B2')).toThrow();
});
