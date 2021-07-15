import React from 'react';
import { Tuning } from './logic/tuning/Tuning';

export type GlobalContextData = {
  tuning: Tuning;
  setTuning: (tuning: Tuning) => void;
};

const initialTuning = Tuning.fromNotes('E2 A2 D3 G3 B3 E4');
// Not sure how this stuff even works anymore
export const GlobalContext = React.createContext<GlobalContextData>({
  tuning: initialTuning,
  setTuning: () => {},
});

export class GlobalStateProvider extends React.Component {
  setTuning = (newTuning: Tuning) => {
    console.log('Tuning was set');
    this.setState({
      tuning: newTuning,
    });
  };

  state = {
    tuning: initialTuning,
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          tuning: this.state.tuning,
          setTuning: this.setTuning,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
