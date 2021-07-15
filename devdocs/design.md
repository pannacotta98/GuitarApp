# Some design and planning things

**NOTE:** *This document is not continually updated*

## Types for music theory

- `Note` — 
- `ChordQuality` — Representing the chord quality, for example maj7. IMPLEMENTATION?
  - `private constructor(???)`
  - `fromIntervals(intervals: Interval[])`
- `Chord` — Representing a specific chord, for example Csus2.
  - `private constructor(???)`
  - `fromName(name: string)`
  - Props
    - `root: Note`
    - `quality: ChordQuality`
  - Static methods
    - ...
- `GuitarChord` — A chord with a specific guitar voicing.

