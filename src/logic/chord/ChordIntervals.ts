import { INTERVAL_NUMBERS, CHORDS_SRC, ChordType } from '../musicalData';
import { combine } from '../util';
// https://en.wikibooks.org/wiki/Music_Theory/Complete_List_of_Chord_Patterns

// Singleton for now; might not be ideal in future
export class ChordIntervals {
  static instance: ChordIntervals;

  chordLookUp: Map<string, ChordType>;

  constructor() {
    // Initialize lookup
    this.chordLookUp = new Map();
    for (const chord of CHORDS_SRC) {
      const optionalNotes: number[] = [];
      const requiredNotes = chord.notes
        .split(' ')
        .filter((interval) => {
          const isRequired = interval[0] !== '(';
          if (!isRequired) {
            const intervalNumber = INTERVAL_NUMBERS.get(interval.slice(1, -1));
            if (intervalNumber !== undefined) {
              optionalNotes.push(intervalNumber);
            } else {
              console.error('Somethiiing is wrooOoOng with chord lookup thing', interval);
            }
          }
          return isRequired;
        })
        .map((interval) => INTERVAL_NUMBERS.get(interval));

      // Find all possible combinations of optional notes
      const combinations = combine(optionalNotes);
      if (combinations[0].length !== 0) {
        combinations.push([]); // Allow for none of the optional notes
      }

      for (const optionals of combinations) {
        this.chordLookUp.set(
          requiredNotes
            .concat(optionals)
            .sort((a, b) => {
              // TODO Hacking typescript until the types are improved in other places
              if (a === undefined || b === undefined) {
                console.error('bläää', a, b);
                return 0;
              }
              return a - b;
            })
            .join('|'),
          chord
        );
      }

      console.log(chord.fullName, requiredNotes, optionalNotes);
    }

    // console.log(this.chordLookUp);
    console.log('size of chordLookUp:', this.chordLookUp.size);
    console.log('size of CHORD_SRC', CHORDS_SRC.length);
  }

  static getInstance() {
    if (ChordIntervals.instance) {
      return ChordIntervals.instance;
    }
    ChordIntervals.instance = new ChordIntervals();
    return ChordIntervals.instance;
  }
}
