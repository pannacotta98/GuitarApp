/**
 * The internal representation is described by a number counting upwards in halfsteps starting
 * with C0 represented by 0. So it begins like C0=0, C#0=1, D=2, ...
 */
type InternalNoteNumber = number;

// TODO Think about some more elegant solution for this
const noteNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

/**
 *
 */
export class Note {
  readonly internalNoteNumber: InternalNoteNumber;

  private constructor(internalNoteNumber: InternalNoteNumber) {
    this.internalNoteNumber = internalNoteNumber;
  }

  toString() {
    return this.nameWithOctave();
  }

  /**
   *
   * @returns the name of the note with octave, for example 'D4'
   */
  nameWithoutOctave() {
    return noteNames[normalizeInternalNote(this.internalNoteNumber)];
  }

  /**
   *
   * @returns the name of the note without octave, for example 'D'
   */
  nameWithOctave() {
    return `${this.nameWithoutOctave()}${Math.trunc(this.internalNoteNumber / noteNames.length)}`;
  }

  /**
   * Creates a new `Note` a number of semitones higher than the current `Note`
   * @param numHalftones the number of semitones to add
   * @returns the new `Note`
   */
  plusHalftones(numHalftones: number) {
    return new Note(this.internalNoteNumber + numHalftones);
  }

  /**
   * Create a `Note` from note name
   * @param noteName the name of the note including the octave, for example 'F#3'
   * @returns a new note
   */
  static fromName(noteName: string): Note {
    const name = noteName.slice(0, -1);
    const octave = parseInt(noteName.slice(-1));
    const number: InternalNoteNumber = octave * noteNames.length + noteNames.indexOf(name);
    return new Note(number);
  }

  static lowest(notes: Note[]): Note {
    let currentLowest = notes[0];
    // Skip first element; it is assigned above
    for (let i = 1; i < notes.length; ++i) {
      if (notes[i].internalNoteNumber > currentLowest.internalNoteNumber) {
        currentLowest = notes[i];
      }
    }
    return currentLowest;
  }
}

/**
 * Returns the internal note number normalized to octave 0
 * @param noteNumber
 */
export function normalizeInternalNote(noteNumber: InternalNoteNumber): InternalNoteNumber {
  return noteNumber % noteNames.length;
}

// TODO Consider having double sharp/flats
// eslint-disable-next-line
type NoteName =
  | 'C'
  | 'C#'
  | 'Db'
  | 'D'
  | 'D#'
  | 'Eb'
  | 'E'
  | 'F'
  | 'F#'
  | 'Gb'
  | 'G'
  | 'G#'
  | 'Ab'
  | 'A'
  | 'A#'
  | 'Bb'
  | 'B';
