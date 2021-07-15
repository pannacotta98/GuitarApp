import React from 'react';
import { TuningSelector } from './TuningSelector';
import { PageBox } from './basicStyledElements';

export function Settings() {
  return (
    <PageBox>
      <h1>Preferences</h1>
      <TuningSelector />
    </PageBox>
  );
}
