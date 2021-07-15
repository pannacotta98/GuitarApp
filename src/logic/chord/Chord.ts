import { Note } from "../note/Note";
import { ChordQuality } from './ChordQuality';

export class Chord {
  readonly root: Note;
  readonly quality: ChordQuality;
  readonly bass: Note;

  private constructor(root: Note, quality: ChordQuality, bass: Note) {
    this.root = root;
    this.quality = quality;
    this.bass = bass;
  }

  static fromRootAndIntervals() {
    //
  }
}
