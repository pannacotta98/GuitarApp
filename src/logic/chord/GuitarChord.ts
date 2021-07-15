/**
 * The placement of the fingers on the fretboard. `0` corresponds to an
 * open string, and `null` corresponds to a muted string. The strings are
 * given from low E to high E when standard tuning is used.
 */
export type GuitarFingering = [
  number | null, // E
  number | null, // A
  number | null, // D
  number | null, // G
  number | null, // B
  number | null // e
];

export class GuitarChord {
  // readonly plainChord: Chord;
  readonly fingering: GuitarFingering;

  constructor(fingering: GuitarFingering) {
    this.fingering = fingering;
  }
}
