import { Note } from '../note/Note';

// type StringNotes = [
//   Note, // E
//   Note, // A
//   Note, // D
//   Note, // G
//   Note, // B
//   Note // e
// ];

export class Tuning {
  readonly openStrings: Note[];
  readonly notesOnFretBoard: Note[][];

  private constructor(openStrings: Note[]) {
    this.openStrings = openStrings;

    this.notesOnFretBoard = this.openStrings.map((openString) =>
      Array(24 + 1)
        .fill(false)
        .map((x, fret) => openString.plusHalftones(fret))
    );
  }

  numberOfStrings() {
    return this.openStrings.length;
  }

  static fromNotes(notes: string) {
    const openStrings = notes.split(' ').map((noteName) => Note.fromName(noteName));
    if (openStrings.length !== 6) throw Error('Only 6 string tunings are supported');
    return new Tuning(openStrings);
  }
}
