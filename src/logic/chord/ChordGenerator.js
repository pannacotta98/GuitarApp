import { IntervalUtilities } from '../IntervalUtilities';
import { NOTE_NAMES } from '../musicalData';
import { ChordQuality } from './ChordQuality';
import { occurences } from '../util';
// here is some stuff that could be useful:
// - https://www.reddit.com/r/musictheory/comments/1jd894/looking_for_an_algorithm_that_generates_chord/

// TODO Limit to two or more notes?
export class ChordGenerator {
  constructor() {
    this.notes = NOTE_NAMES;

    // E2–A2–D3–G3–B3–E4 <-- scientific pitch notation
    this.tuning = 'E2 A2 D3 G3 B3 E4'
      .split(' ')
      .map((note) => IntervalUtilities.toNoteNumber(note));
    console.log('tuning in numbers:', this.tuning);
  }

  /* getAllChordsInFretRange(low, high) {
    const result = [];

    // The posible fret positions
    // TODO Make muted an option and handle low=0
    const frets = [0]; // Strings can always be left open
    for (let i = low; i < high; ++i) {
      /////////////////////////// TODO decide on if high is included or smth
      frets.push(i);
    }
    frets.push(null); // Strings can be muted

    // Find all combinations
    for (const s1 of frets) {
      for (const s2 of frets) {
        for (const s3 of frets) {
          for (const s4 of frets) {
            for (const s5 of frets) {
              for (const s6 of frets) {
                // Name chord and add to result
                const fingering = [s1, s2, s3, s4, s5, s6];
                // console.log(fingering, this.nameChord(fingering));
                result.push({
                  name: this.nameChord(fingering),
                  fingering: fingering,
                });
              }
            }
          }
        }
      }
    }

    return result;
  }*/

  getNotesInFingering(fingering) {
    const notesInChord = [];
    for (let i = 0; i < fingering.length; ++i) {
      // if string is not muted
      if (fingering[i] !== null) {
        notesInChord.push(this.tuning[i] + fingering[i]);
      }
    }
    return notesInChord;
  }

  nameChord(fingering) {
    // console.log('Naming chord');
    // console.log(fingering);
    const notesInChord = this.getNotesInFingering(fingering);

    const root = Math.min(...notesInChord);
    const rootName = IntervalUtilities.toNoteName(root);

    // Normalize notes to one octave and remove duplicates
    const notesInChordNormalized = notesInChord.map((note) =>
      IntervalUtilities.normalizeNote(note)
    );
    const notesInChordNormalizedNoDuplicates = [...new Set(notesInChordNormalized)];
    notesInChordNormalizedNoDuplicates.sort((a, b) => a - b);

    const counts = occurences(notesInChordNormalized);

    const result = [];

    for (const buildNote of notesInChordNormalizedNoDuplicates) {
      const buildNoteIsRoot = IntervalUtilities.toNoteName(buildNote) === rootName;

      let includedNotes = notesInChordNormalizedNoDuplicates;
      // If building from another note than the root, the root can be excluded
      // from the chord quality if it is not included in the rest of the voicing
      if (!buildNoteIsRoot) {
        includedNotes = notesInChordNormalizedNoDuplicates.filter(
          (note) => !(note === IntervalUtilities.normalizeNote(root) && counts.get(note) === 1)
        );
      }

      const chord = ChordQuality.fromIntervals(
        IntervalUtilities.getIntervals(includedNotes, buildNote)
      );

      if (chord !== null) {
        result.push({
          chordTypeInfo: chord,
          root: IntervalUtilities.toNoteName(buildNote),
          bass: buildNoteIsRoot ? null : rootName,
          // Non-slash chords should be preffered if similar complexity
          finalWeight: chord.weight + (buildNoteIsRoot ? 0 : 6),
        });
      }
    }

    result.sort((a, b) => a.finalWeight - b.finalWeight);

    return result.map(
      (obj) => `${obj.root}${obj.chordTypeInfo.abbr[0]}${obj.bass !== null ? `/${obj.bass}` : ''}`
    );
  }
}
