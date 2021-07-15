import React, { Component } from 'react';
import styled from 'styled-components';

const ChordNameHeading = styled.h1`
  text-align: center;
  color: var(--contrasting-text-color);
  font-size: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const MainContainer = styled.div`
  background-color: var(--lighter-background);
  padding: 2rem 1rem;
  box-shadow: var(--main-shadow);
  position: relative;
`;

// TODO Use variables for main colors and shadow probably
const TestButton = styled.button`
  background-color: var(--button-color);
  border: none;
  color: var(--contrasting-text-color);
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  transition: 0.1s;
  cursor: pointer;

  :hover {
    background-color: #4f4f4f; /*TODO*/
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
  }

  :active {
    background-color: #3f3f3f; /*TODO*/
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  }

  :focus {
    /* outline: none; */
  }
`;

export class ChordSelection extends Component {
  render() {
    return (
      <MainContainer>
        <ChordNameHeading>Cbm7</ChordNameHeading>
        {/* <ChordNameHeading>C{'\u266d'}m7</ChordNameHeading> */}
        {/* <ChordNameHeading>C♯m7</ChordNameHeading> */}
        <TestButton>hej</TestButton>
      </MainContainer>
    );
  }
}
