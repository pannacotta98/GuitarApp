import React from 'react';

export function TuningSelector() {
  return (
    <>
      <h2>Tuning</h2>
      <NoteSelector />
      <NoteSelector />
      <NoteSelector />
      <NoteSelector />
      <NoteSelector />
      <NoteSelector />
    </>
  );
}

function NoteSelector() {
  return (
    <select
    // value={this.state.selectedScale}
    // onChange={(event) => this.setState({ selectedScale: event.target.value })}
    >
      {/* TODO THiiiis */}
      {['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'].map((name) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  );
}
