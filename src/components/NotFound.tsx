import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  text-align: center;
`;

export function NotFound() {
  return (
    <Container>
      <div>
        <h1>404 — Page Not Found</h1>
        {/* <hr></hr>
        <h3>Try the links above</h3> */}
      </div>
    </Container>
  );
}
