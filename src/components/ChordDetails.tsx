import React from 'react';
import styled from 'styled-components';
import { IntervalUtilities } from '../logic/IntervalUtilities';
import { ChordGenerator } from '../logic/chord/ChordGenerator';
import { NOTE_NAMES } from '../logic/musicalData';
import { GuitarFingering } from '../logic/chord/GuitarChord';

const DetailsContainer = styled.div`
  padding-top: 1rem;
`;

export function ChordDetails({ fingering }: { fingering: GuitarFingering }) {
  const noteOccurences = new Map();
  // TODO This should be fixed but depends on other changes i will make
  const cg = new ChordGenerator();
  cg.getNotesInFingering(fingering).forEach((note) => {
    const normalizedNote = IntervalUtilities.normalizeNote(note);
    if (noteOccurences.has(normalizedNote)) {
      const oldOccurences = noteOccurences.get(normalizedNote);
      noteOccurences.set(normalizedNote, oldOccurences + 1);
    } else {
      noteOccurences.set(normalizedNote, 1);
    }
  });

  console.log(noteOccurences);

  return (
    <DetailsContainer>
      {[...noteOccurences.keys()].map((note, idx) => (
        <p key={idx}>
          {NOTE_NAMES[note]}: {noteOccurences.get(note)} {'       '}
        </p>
      ))}
    </DetailsContainer>
  );
}
