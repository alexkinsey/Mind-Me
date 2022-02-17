import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20em;
  padding: 5em;

  border: 1px solid white;
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(33px);
`;

const EndScreen = ({ turns }) => {
  return (
    <Wrapper>
      <h1>Congratulations!</h1>
      <h3>You completed the puzzle in {turns} turns.</h3>
    </Wrapper>
  );
};

export default EndScreen;
