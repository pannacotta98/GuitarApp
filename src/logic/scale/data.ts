import { INTERVAL_NUMBERS } from '../musicalData';

// https://en.wikipedia.org/wiki/List_of_musical_scales_and_modes
export const SCALES_SRC = new Map(
  [
    ['Major (Ionian)', '1 2 3 4 5 6 7'],
    ['Natural Minor (Aeolian)', '1 2 b3 4 5 b6 b7'],
    ['Dorian', '1 2 b3 4 5 6 b7'],
    ['Harmonic Minor', '1 2 b3 4 5 b6 7'],
  ].map((scale) => [
    scale[0],
    // Change to internal representation
    scale[1].split(' ').map((interval) => INTERVAL_NUMBERS.get(interval)),
  ])
);
